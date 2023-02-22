const { assert, expect, expectRevert, withNamedArgs } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { ABIS, ADDRESS, VARIABLES } = require("./@config");
const {
  Impersonate,
  getPositions,
  WaitingPositionsLength,
  WaitingPositionsStart,
} = require("./@utils");
const helpers = require("@nomicfoundation/hardhat-network-helpers")


!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Test transactions from user on Vault on LONG exposition", function () {
      let accounts;
      before(async () => {
        // await hre.network.provider.send("hardhat_reset")
        // await helpers.reset("https://arb-mainnet.g.alchemy.com/v2/"+ process.env.ALCHEMY_ARBITRUM_API, 63416900);
        //SIGNERS AND ACCOUNTS
        accounts = await ethers.getSigners();
        provider = await ethers.provider;
        deployer = accounts[0];
        keeper = accounts[9];
        user = accounts[1];
        user2 = accounts[2];
        user3 = accounts[3];
        whale = await Impersonate(ADDRESS.WHALE_USDC); //to fund hardhat account with real USDC
        gmxAdmin = await Impersonate(ADDRESS.GMX_ADMIN_ACCOUNT); //to athorize a keepers for validating tx

        //VARIABLE
        keepersFee = VARIABLES.KEEPERS_FEE;
        debug = VARIABLES.DEBUG;
        deposit1 = "100000000";
        deposit2 = "150000000";
        deposit3 = "250000000";

        //CONTRACTS
        await deployments.fixture(["all"]);
        MyVault = await ethers.getContract("MyVault");
        GMX_controller = await ethers.getContract("GMX_controller");

        USDC = await ethers.getContractAt(ABIS.ERC20, ADDRESS.USDC, deployer);
        WETH = await ethers.getContractAt(ABIS.ERC20, ADDRESS.WETH, deployer);
        GMX_ROUTER = await ethers.getContractAt(
          ABIS.GMX_ROUTER,
          ADDRESS.GMX_ROUTER,
          deployer
        );
        GMX_POSITION_ROUTER = await ethers.getContractAt(
          ABIS.GMX_POSITION_ROUTER,
          ADDRESS.GMX_POSITION_ROUTER,
          deployer
        );
        GMX_READER = await ethers.getContractAt(
          ABIS.GMX_READER,
          ADDRESS.GMX_READER,
          deployer
        );
        GMX_VAULT = await ethers.getContractAt(
          ABIS.GMX_VAULT,
          ADDRESS.GMX_VAULT,
          deployer
        );

        //UTILS FONCTIONS
        positionInfo = async () => {
          let response = await getPositions(GMX_controller.address, true);
          data = [];
          response.forEach((elem) => data.push(parseInt(elem.toString())));
          leverage = data[0] / data[1];
          nav = data[1] + data[8];
          data.push(leverage);
          data.push(nav);
          return data;
        };
        userInfo = async (_user) => {
          ethBalance = parseInt((await _user.getBalance()).toString());
          usdcBalance = parseInt(
            (await USDC.balanceOf(_user.address)).toString()
          );
          plpBalance = parseInt(
            (await MyVault.balanceOf(_user.address)).toString()
          );
          totalsupply = parseInt((await MyVault.totalSupply()).toString());
          return [
            ethBalance,
            usdcBalance,
            plpBalance,
            plpBalance / totalsupply,
          ];
        };
        vaultInfo = async () => {
          totalsupply = parseInt((await MyVault.totalSupply()).toString());
          await MyVault.updateNetAssetValue();
          netAssetValue = parseInt(
            (await MyVault.getNetAssetValue()).toString()
          );
          pricepershare = netAssetValue / totalsupply;
          return [pricepershare, totalsupply, netAssetValue];
        };
        depositStrat = async (_user, amount) => {
          depositAmount = amount;
          let txapprove = await USDC.connect(_user).approve(
            MyVault.address,
            depositAmount
          );
          txr1 = await txapprove.wait();
          let txopenpos = await MyVault.connect(_user).deposit(
            ADDRESS.USDC,
            depositAmount,
            {
              value: keepersFee,
              gasLimit: 20000000,
            }
          );
          txr2 = await txopenpos.wait()

          // let events = txr2["events"]
          // for await (const event of events) {
          //   if (event.event == "depositEvent"){
          //     console.log(event)
          //     console.log(event["args"]["amount"].toString())
          //     console.log(event["args"]["PLPissued"].toString())
          //   }
          // }

          await executeIncreasePositions()
          
        };
        withdrawStrat = async (_user, amount) => {
          let txclosepos = await MyVault.connect(_user).withdraw(amount, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          txr2 = await txclosepos.wait();
          await executeDecreasePositions();
        };

        executeIncreasePositions = async () => {
          await GMX_POSITION_ROUTER.connect(keeper).executeIncreasePositions(
            parseInt(await WaitingPositionsLength(GMX_POSITION_ROUTER, true)),
            GMX_controller.address
          );
        };
        executeDecreasePositions = async () => {
          await GMX_POSITION_ROUTER.connect(keeper).executeDecreasePositions(
            parseInt(await WaitingPositionsLength(GMX_POSITION_ROUTER, false)),
            GMX_controller.address
          );
        };
      });

      describe("Full test on LONG position", function () {
        before(async () => {
          await MyVault.setGMX_controller(GMX_controller.address);
          await MyVault.acceptToken(USDC.address);
          await USDC.connect(whale).transfer(
            user.address,
            deposit1,
            { gasLimit: 100000 }
          );
          await USDC.connect(whale).transfer(
            user2.address,
            deposit2,
            { gasLimit: 100000 }
          );
          await USDC.connect(whale).transfer(
            user3.address,
            deposit3,
            { gasLimit: 100000 }
          );
          await GMX_POSITION_ROUTER.connect(gmxAdmin).setPositionKeeper(
            keeper.address,
            true
          );
          await MyVault.setExposition(1);
        });
        describe("First deposit", function () {
          before(async () => {
            ethBalanceT0 = (await user.getBalance()).toString();
            usdcBalanceT0 = (await USDC.balanceOf(user.address)).toString();

            await depositStrat(user, deposit1);

            

            ethBalanceT1 = (await user.getBalance()).toString();
            usdcBalanceT1 = (await USDC.balanceOf(user.address)).toString();
          });
          it("should have spend USDC accordingly", async function () {
            await expect(parseInt(usdcBalanceT1)).to.be.eq(
              parseInt(usdcBalanceT0) - parseInt(deposit1)
            );
          });
          it("should have open a position", async function () {
            positiont0 = await getPositions(GMX_controller.address, true);
            await expect((parseInt(positiont0[0].toString()) / 1e24)).to.be.eq(
              parseInt(parseInt(deposit1).toFixed(0) * 1.1)
            );
          });
          it("should have received 100% supply of PLP Token ", async function () {
            let plptoken = await MyVault.balanceOf(user.address);
            await expect(plptoken).to.be.eq(await MyVault.totalSupply());
          });
        });
        describe("Second deposit", function () {
          before(async () => {
            beforePos = await positionInfo();
            beforeUser = await userInfo(user);
            beforeUser2 = await userInfo(user2);
            beforeVault = await vaultInfo();
            await depositStrat(user2, deposit2);
            afterPos = await positionInfo();
            afterUser = await userInfo(user);
            afterUser2 = await userInfo(user2);
            afterVault = await vaultInfo();
            if (debug) {
              console.log(beforePos);
              console.log(afterPos);
            }
          });
          it("should have spend USDC accordingly", async function () {
            await expect(afterUser2[1]).to.be.eq(
              beforeUser2[1] - parseInt(deposit2)
            );
          });
          it("should have increase the open position", async function () {
            await expect(afterPos[0] / 1e24).to.be.eq(
              beforePos[0] / 1e24 + 1.1 * parseInt(deposit2)
            );
          });
          // it("should not modify the leverage", async function () {
          //   await expect(beforePos[9].toFixed(3)).to.be.eq(
          //     afterPos[9].toFixed(3)
          //   );
          // });
          it("should have received PLP Token", async function () {
            await expect(afterUser2[2]).to.be.above(0);
          });
          it("should have slightly increase share price due to GMX fees overestimated", async function () {
            await expect(
              (afterVault[0] - beforeVault[0]) / beforeVault[0]
            ).to.be.below(0.01); //1% max of dillutive effect
          });
          it("should display data in debug mode ", async function () {
            if (debug) {
              console.log("Second deposit");
              console.log("Pre op leverage", beforePos[9]);
              console.log("Pre money price per share :", beforeVault[0]);
              console.log("Post money price per share :", afterVault[0]);
              console.log("Post op leverage", afterPos[9]);
              console.log("--");
              console.log("User 1");
              console.log(
                "Acq. price of PLP :",
                deposit1 / (beforeUser[2] / 10 ** 12)
              );
              console.log(
                "Pre op value :",
                (beforeUser[2] * beforeVault[0]) / 10 ** 24
              );
              console.log(
                "Pre op shares :",
                parseInt(100 * beforeUser[3]).toFixed(1),
                "%"
              );
              console.log(
                "Post op value :",
                (afterUser[2] * afterVault[0]) / 10 ** 24
              );
              console.log(
                "Post op shares :",
                parseInt(100 * afterUser[3]).toFixed(1),
                "%"
              );
              console.log("--");
              console.log("User 2");
              console.log("Amount invested : ", deposit2);
              console.log(
                "Acq. price of PLP :",
                (deposit2 / afterUser2[2]) * 10 ** 12
              );
              console.log("PLP received : ", afterUser2[2]);
              console.log(
                "Value of investment : ",
                (afterUser2[2] * afterVault[0]) / 10 ** 24
              );
              console.log(
                "share :",
                parseInt(100 * afterUser2[3]).toFixed(1),
                "%"
              );
            }
          });
        });
        describe("Third deposit", function () {
          before(async () => {
            beforePos = await positionInfo();
            beforeUser = await userInfo(user);
            beforeUser2 = await userInfo(user2);
            beforeUser3 = await userInfo(user3);
            beforeVault = await vaultInfo();


            let txapprove = await USDC.connect(user3).approve(
              MyVault.address,
              deposit3
            );
            txr1 = await txapprove.wait();
            let txopenpos = await MyVault.connect(user3).deposit(
              ADDRESS.USDC,
              deposit3,
              {
                value: keepersFee,
                gasLimit: 10000000,
              }
            );
            txr2 = await txopenpos.wait();

            let events = txr2["events"]
            for await (const event of events) {
              if (event.event == "depositEvent"){
                PLPissuedtouser3 = event["args"]["PLPissued"]  
              }
            }
   
            // console.log(PLPissuedtouser3.toString())
            await expect(parseInt(await WaitingPositionsLength(GMX_POSITION_ROUTER, true))).to.be.equal(parseInt(await WaitingPositionsStart(GMX_POSITION_ROUTER, true))+1)  
            await executeIncreasePositions();

            afterPos = await positionInfo();
            afterUser = await userInfo(user);
            afterUser2 = await userInfo(user2);
            afterUser3 = await userInfo(user3);
            afterVault = await vaultInfo();
            if (debug) {
              console.log(beforePos);
              console.log(afterPos);
            }
          });
          it("should have spend USDC accordingly", async function () {
            await expect(afterUser3[1]).to.be.eq(
              beforeUser3[1] - parseInt(deposit3)
            );
          });
          it("should have increase the open position", async function () {
            await expect(afterPos[0] / 1e24).to.be.eq(
              beforePos[0] / 1e24 + 1.1 * parseInt(deposit3)
            );
          });
          // it("should not modify the leverage", async function () {
          //   await expect(beforePos[9].toFixed(3)).to.be.eq(
          //     afterPos[9].toFixed(3)
          //   );
          // });
          it("should have received PLP Token", async function () {
            await expect(afterUser3[2]).to.be.above(0);
          });
          it("should have slightly increase share price due to GMX fees overestimated", async function () {
            await expect(
              (afterVault[0] - beforeVault[0]) / beforeVault[0]
            ).to.be.below(0.01); //1% max of dillutive effect
          });
          it("should display data in debug mode  ", async function () {
            if (debug) {
              console.log("Third deposit");
              console.log("Pre op leverage", beforePos[9]);
              console.log("Pre money price per share :", beforeVault[0]);
              console.log("Post money price per share :", afterVault[0]);
              console.log("Post op leverage", afterPos[9]);
              console.log("--");

              console.log("User 1");
              console.log("Acq. price of PLP :", deposit1 / beforeUser[2]);
              console.log("Pre op value :", beforeUser[2] * beforeVault[0]);
              console.log(
                "Pre op shares :",
                parseInt(100 * beforeUser[3]).toFixed(1),
                "%"
              );
              console.log("Post op value :", afterUser[2] * afterVault[0]);
              console.log(
                "Post op shares :",
                parseInt(100 * afterUser[3]).toFixed(1),
                "%"
              );
              console.log("--");

              console.log("User 2");
              console.log("Acq. price of PLP :", deposit2 / beforeUser2[2]);
              console.log("Pre op value :", beforeUser2[2] * beforeVault[0]);
              console.log(
                "Pre op shares :",
                parseInt(100 * beforeUser2[3]).toFixed(1),
                "%"
              );
              console.log("Post op value :", afterUser2[2] * afterVault[0]);
              console.log(
                "Post op shares :",
                parseInt(100 * afterUser2[3]).toFixed(1),
                "%"
              );
              console.log("--");

              console.log("User 3");
              console.log("Amount invested : ", deposit3);
              console.log("Acq. price of PLP :", deposit3 / afterUser3[2]);
              console.log("PLP received : ", afterUser3[2]);
              console.log(
                "Value of investment : ",
                afterUser3[2] * afterVault[0]
              );
              console.log(
                "share :",
                parseInt(100 * afterUser3[3]).toFixed(1),
                "%"
              );
              console.log(
                "Fees paid :",
                (deposit3 - afterUser3[2] * afterVault[0]) / deposit3
              );
            }
          });
        });
        describe("Full withdraw of a user", function () {
          before(async () => {
            beforePos = await positionInfo();
            beforeUser = await userInfo(user);
            beforeUser2 = await userInfo(user2);
            beforeUser3 = await userInfo(user3);
            beforeVault = await vaultInfo();
            let status = await getPositions(GMX_controller.address, true);
            // console.log("status")
            // status.forEach((e)=> console.log(e.toString()))


            let txclosepos = await MyVault.connect(user3).withdraw(PLPissuedtouser3, {
              value: keepersFee,
              gasLimit: 10000000,
            });
            txr2 = await txclosepos.wait();
            // let events = txr2["events"]
            // for await (const event of events) {
            //   if (event.event == "withdrawEvent"){
            //     console.log(event["args"]["amount"].toString())
            //     console.log(event["args"]["nav"].toString())
            //     console.log(event["args"]["preop_supply"].toString())
            //     // PLPissuedtouser3 = event["args"]["PLPissued"]  
            //   }
            // }
   
            await executeDecreasePositions();

            let response = await getPositions(GMX_controller.address, true);
            // console.log("response")
            // response.forEach((e)=> console.log(e.toString()))
            afterPos = await positionInfo();
            afterUser = await userInfo(user);
            afterUser2 = await userInfo(user2);
            afterUser3 = await userInfo(user3);
            afterVault = await vaultInfo();
            if (debug) {
              console.log(beforePos);
              console.log(afterPos);
            }
          });
          it("should have spend PLP accordingly", async function () {
            await expect((afterUser3[2] / 10 ** 18).toFixed(0)).to.be.eq("0");
          });
          it("should have decrease the open position by the value of user 3", async function () {
            await expect(
              (afterPos[1] - beforePos[1] - beforeUser3[2] * beforeVault[0]) /
                10 ** 32
            ).to.be.below(0.01);
          });
          // it("should not modify the leverage", async function () {
          //   await expect(beforePos[9]).to.be.eq(
          //     afterPos[9]
          //   );
          //   // await expect(beforePos[9].toFixed(3)).to.be.eq(
          //   //   afterPos[9].toFixed(3)
          //   // );
          // });
          it("should have received USDC Token", async function () {
            await expect(afterUser3[1]).to.be.above(beforeUser3[1]);
          });
          it("should have slightly increase share price due to GMX fees overestimated", async function () {
            await expect(
              (afterVault[0] - beforeVault[0]) / beforeVault[0]
            ).to.be.below(0.015); //1.5% max of dillutive effect
          });
          it("should display data in debug mode ", async function () {
            if (debug) {
              console.log("Full withdraw");
              console.log("Pre op leverage", beforePos[9]);
              console.log("Pre money price per share :", beforeVault[0]);
              console.log("Post money price per share :", afterVault[0]);
              console.log("Post op leverage", afterPos[9]);
              console.log("Delta nav :", beforeVault[2] - afterVault[2]);

              console.log("--");
              console.log("User 1");
              console.log("Acq. price of PLP :", deposit1 / beforeUser[2]);
              console.log("Pre op value :", beforeUser[2] * beforeVault[0]);
              console.log(
                "Pre op shares :",
                parseInt(100 * beforeUser[3]).toFixed(1),
                "%"
              );
              console.log("Post op value :", afterUser[2] * afterVault[0]);
              console.log(
                "Post op shares :",
                parseInt(100 * afterUser[3]).toFixed(1),
                "%"
              );
              console.log("--");

              console.log("User 2");
              console.log("Acq. price of PLP :", deposit2 / beforeUser2[2]);
              console.log("Pre op value :", beforeUser2[2] * beforeVault[0]);
              console.log(
                "Pre op shares :",
                parseInt(100 * beforeUser2[3]).toFixed(1),
                "%"
              );
              console.log("Post op value :", afterUser2[2] * afterVault[0]);
              console.log(
                "Post op shares :",
                parseInt(100 * afterUser2[3]).toFixed(1),
                "%"
              );
              console.log("--");

              console.log("User 3");
              console.log("Acq. price of PLP :", deposit3 / beforeUser3[2]);
              console.log("PLP before op :", beforeUser3[2]);
              console.log("Value before op :", beforeUser3[2] * beforeVault[0]);

              console.log("PLP remaining : ", afterUser3[2]);
              console.log(
                "Value of investment : ",
                afterUser3[2] * afterVault[0]
              );

              console.log("PLP Sold :", beforeUser3[2] - afterUser3[2]);
              console.log(
                "Value sold :",
                beforeUser3[2] * beforeVault[0] - afterUser3[2] * afterVault[0]
              );
              console.log(
                "Value per PLP sold : ",
                (beforeUser3[2] * beforeVault[0] -
                  afterUser3[2] * afterVault[0]) /
                  (beforeUser3[2] - afterUser3[2])
              );
            }
          });
        });
      });
    });
