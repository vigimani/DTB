const { expect } = require("chai");
const { ABIS, ADDRESS, VARIABLES } = require("./@config");
const { ethers, network, userConfig } = require("hardhat");
const { Impersonate, getPositions, WaitingPositionsLength, WaitingPositionsStart } = require("./@utils");

describe("GMX controller unit tests", () => {
  before(async function () {
    //SIGNERS AND ACCOUNTS
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    whale = await Impersonate(ADDRESS.WHALE_USDC) //to fund hardhat account with real USDC
    gmxAdmin = await Impersonate(ADDRESS.GMX_ADMIN_ACCOUNT) //to athorize a keepers for validating tx

    //VARIABLES
    keepersFee = VARIABLES.KEEPERS_FEE
    debug = VARIABLES.DEBUG
    // CONTRACTS
    await deployments.fixture(["all"]);
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
    executeIncreasePositions = async () => {
      await GMX_POSITION_ROUTER.executeIncreasePositions(
        parseInt(await WaitingPositionsLength(GMX_POSITION_ROUTER, true)),
        GMX_controller.address
      );
    };
    executeDecreasePositions = async () => {
      await GMX_POSITION_ROUTER.executeDecreasePositions(
        parseInt(await WaitingPositionsLength(GMX_POSITION_ROUTER, false)),
        GMX_controller.address
      );
    };
    netValueOfPosition = async (_isLong) => {
      let collateralToken = _isLong ? ADDRESS.WETH : ADDRESS.USDC;
      let response = await GMX_VAULT.getPosition(
        GMX_controller.address,
        collateralToken,
        ADDRESS.WETH,
        _isLong
      );
      let delta = await GMX_VAULT.getPositionDelta(
        GMX_controller.address,
        collateralToken,
        ADDRESS.WETH,
        _isLong
      );
      let netNAV = response[1] + delta[1];
      return netNAV;
    };
  });
  describe("Deployment", function () {
    it("Should deploy the contracts", async () => {
      expect(GMX_controller.address).not.to.equal("0x");
      console.log(GMX_controller.address)
    });
    it("Should NOT give ownership of the controller", async () => {
      await expect(GMX_controller.connect(accounts[1]).setVaultOwner(deployer.address)).to.be.revertedWith('Ownable: caller is not the owner')
    });
    it("Should give deployer the ownership of the controller", async () => {
      await GMX_controller.setVaultOwner(accounts[1].address);
      await expect(await GMX_controller.getVaultOwner()).to.be.eq(accounts[1].address)
      await GMX_controller.setVaultOwner(accounts[0].address);
    });
    it("Should NOT modify execution fees", async () => {
      await expect(GMX_controller.connect(accounts[1]).setGMXexecutionFees(200000000000000)).to.be.revertedWith('Ownable: caller is not the owner')
    });
    it("Should set execution fees", async () => {
      await GMX_controller.setGMXexecutionFees(200000000000000);
      await expect((await GMX_controller.getGMXexecutionFees()).toString()).to.be.eq("200000000000000")
      await GMX_controller.setGMXexecutionFees(100000000000000);
    });
  });
  describe("Contract interraction with GMX", function () {
    describe("Initialisation", function () {
      it("Should approved GMX Router in constructor", async () => {
        expect(
          await GMX_ROUTER.approvedPlugins(
            GMX_controller.address,
            ADDRESS.GMX_POSITION_ROUTER
          )
        ).to.be.true;
      });
      it("Should fund deployer with USDC", async () => {
        //TRANSFER USDC FROM WHALE TO SIGNER
        await USDC.connect(whale).transfer(
          deployer.address,
          ethers.utils.parseUnits("1000", "6").mul(1000),
          {
            gasLimit: 100000,
          }
        );
        expect(await USDC.balanceOf(deployer.address)).to.not.be.equal(0);
      });
      it("Should set a Keeper (account to validate transaction)", async function () {
        await GMX_POSITION_ROUTER.connect(gmxAdmin).setPositionKeeper(
          deployer.address,
          true
        );
        expect(await GMX_POSITION_ROUTER.isPositionKeeper(deployer.address)).to
          .be.true;
      });
      
    });
    describe("Test LONG ETH/USDC", function () {
      before(async function () {
        positiont0 = await getPositions(GMX_controller.address, true);
        // console.log("Nav before open : ", parseInt(positiont0[1].toString())+parseInt(positiont0[8].toString()))  
      });
      describe("should open a LONG ETH/USDC", function () {
        before(async function () {
          tokenAmount = "15000000";
        });
        it("should add a request", async function () {
          waitingPositionsT0 = await WaitingPositionsLength(GMX_POSITION_ROUTER, true);
          await USDC.approve(GMX_controller.address, parseInt(tokenAmount));
          await GMX_controller.increasePosition(tokenAmount, true, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          waitingPositionsT1 = await WaitingPositionsLength(GMX_POSITION_ROUTER, true);
          await expect(parseInt(waitingPositionsT1)).to.be.eq(
            parseInt(waitingPositionsT0) + 1
          );
        });
        it("should validate the request", async function () {
          await executeIncreasePositions();
          await expect(await WaitingPositionsStart(GMX_POSITION_ROUTER, true)).to.be.equal(
            await WaitingPositionsLength(GMX_POSITION_ROUTER, true)
          );
        });
        it("should have a position", async function () {
          positiont1 = await getPositions(GMX_controller.address, true);
          await expect(positiont1[0]).to.be.eq(
            "16500000000000000000000000000000"
          );
        // console.log("Nav after 1st open : ", parseInt(positiont1[1].toString())+parseInt(positiont1[8].toString()))  
        });
        it("should be possible to increase the long position", async function () {
          tokenAmount2 = "20000000";
          await USDC.approve(GMX_controller.address, parseInt(tokenAmount2));
          await GMX_controller.increasePosition(tokenAmount2, true, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          await executeIncreasePositions();
          positiont2 = await getPositions(GMX_controller.address, true);
          await expect(positiont2[0]).to.be.eq(
            "38500000000000000000000000000000"
          );
          // console.log("Nav after 2nd open : ", parseInt(positiont2[1].toString())+parseInt(positiont2[8].toString()))  

        });
      });
      describe("should NOT open a LONG ETH/USDC", function () {
        it("should not add a request", async function () {
          await expect(GMX_controller.connect(accounts[2]).increasePosition(tokenAmount, true, {
            value: keepersFee,
            gasLimit: 10000000,
          })).to.be.revertedWith("Not vault")
        });
      });
      describe("should close a LONG ETH/USDC", function () {
        before(async function () {
          tokenAmount = "25000000";
          deployerUSDC = await USDC.balanceOf(deployer.address)
          // console.log("Balance t0 :", parseInt(deployerUSDC.toString())/10**6, "USDC")

          positiont0 = await getPositions(GMX_controller.address, true);
          // console.log("Size : ", positiont0[0].toString())
          // console.log("Colatteral : ", positiont0[1].toString())
          // console.log("Levier : ", parseInt(positiont0[0].toString())/parseInt(positiont0[1].toString()))

        });
        it("should add a request", async function () {
          waitingPositionsT0 = await WaitingPositionsLength(GMX_POSITION_ROUTER, false);
          await GMX_controller.decreasePosition(deployer.address, 0.99*tokenAmount, true, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          waitingPositionsT1 = await WaitingPositionsLength(GMX_POSITION_ROUTER, false);
          await expect(parseInt(waitingPositionsT1)).to.be.eq(
            parseInt(waitingPositionsT0) + 1
          );
        });
        it("should validate the request", async function () {
          await executeDecreasePositions();
          await expect(await WaitingPositionsStart(GMX_POSITION_ROUTER, (false))).to.be.equal(
            await WaitingPositionsLength(GMX_POSITION_ROUTER, false)
          );
        });
        it("should having reduced the position", async function () {
          positiont1 = await getPositions(GMX_controller.address, true);
          // let response = await GMX_VAULT.getPosition(
          //   GMX_controller.address,
          //   ADDRESS.WETH,
          //   ADDRESS.WETH,
          //   true
          // );
          // let delta = await GMX_VAULT.getPositionDelta(
          //   GMX_controller.address,
          //   ADDRESS.WETH,
          //   ADDRESS.WETH,
          //   true
          // );
          // console.log("Nav after close : ", parseInt(response[1].toString())+parseInt(delta[1].toString()))  


          await expect(positiont1[0]).not.to.be.eq(positiont0[0]);
          deployerUSDC2 = await USDC.balanceOf(deployer.address)
          // console.log("Size : ", positiont1[0].toString())
          // console.log("Balance t1 :", parseInt(deployerUSDC2.toString())/10**6, "USDC")
          // console.log("Colatteral : ", positiont1[1].toString())
          // console.log("Levier : ", parseInt(positiont1[0].toString())/parseInt(positiont1[1].toString()))
        });
      });
      describe("should liquidate the LONG ETH/USDC", function () {
        before(async function () {
          tokenAmount3 = "55000000";
          await USDC.approve(GMX_controller.address, parseInt(tokenAmount3));
          await GMX_controller.increasePosition(tokenAmount3, true, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          await executeIncreasePositions();
        });
        it("should add a request", async function () {
          waitingPositionsT0 = await WaitingPositionsLength(GMX_POSITION_ROUTER, false);
          await GMX_controller.liquidatePosition(true, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          await expect(parseInt(await WaitingPositionsLength(GMX_POSITION_ROUTER, false))).to.be.eq(
            parseInt(waitingPositionsT0) + 1
          );
        });
        it("should validate the request", async function () {
          await executeDecreasePositions();
          await expect(await WaitingPositionsStart(GMX_POSITION_ROUTER, (false))).to.be.equal(
            await WaitingPositionsLength(GMX_POSITION_ROUTER, false)
          );
        });
        it("should liquidate the position", async function () {
          await expect((await getPositions(GMX_controller.address, true))[0]).to.be.eq("0");
        });
      });
    });
    describe("Test SHORT ETH/USDC", function () {
      before(async function () {
        positiont0 = await getPositions(GMX_controller.address, false);
      });
      describe("should open a SHORT ETH/USDC", function () {
        before(async function () {
          tokenAmount = "15000000";
        });
        it("should add a request", async function () {
          waitingPositionsT0 = await WaitingPositionsLength(GMX_POSITION_ROUTER, true);
          await USDC.approve(GMX_controller.address, parseInt(tokenAmount));
          await GMX_controller.increasePosition(tokenAmount, false, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          waitingPositionsT1 = await WaitingPositionsLength(GMX_POSITION_ROUTER, true);
          await expect(parseInt(waitingPositionsT1)).to.be.eq(
            parseInt(waitingPositionsT0) + 1
          );
        });
        it("should validate the request", async function () {
          await executeIncreasePositions();
          await expect(await WaitingPositionsStart(GMX_POSITION_ROUTER, (true))).to.be.equal(
            await WaitingPositionsLength(GMX_POSITION_ROUTER, true)
          );
        });
        it("should have a position", async function () {
          positiont1 = await getPositions(GMX_controller.address, false);
          await expect(parseInt(positiont1[0])).to.be.eq(
            parseInt(positiont0[0]) + parseInt(tokenAmount) * 10 ** 24 * 1.1
          );
          // positiont1.forEach((elem)=> console.log(elem.toString()))
        });
        it("should be possible to increase the short position", async function () {
          tokenAmount2 = "20000000";
          await USDC.approve(GMX_controller.address, parseInt(tokenAmount2));
          await GMX_controller.increasePosition(tokenAmount2, false, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          await executeIncreasePositions();
          positiont2 = await getPositions(GMX_controller.address, false);
          // positiont2.forEach((elem)=> console.log(elem.toString()))
          await expect(positiont2[0].toString()).to.be.eq(
            "38500000000000000000000000000000"
          );
        });
      });
      describe("should NOT open a SHORT ETH/USDC", function () {
        it("should not add a request", async function () {
          await expect(GMX_controller.connect(accounts[2]).increasePosition(tokenAmount, true, {
            value: keepersFee,
            gasLimit: 10000000,
          })).to.be.revertedWith("Not vault")
        });
      });
      describe("should close a SHORT ETH/USDC", function () {
        before(async function () {
          tokenAmount = "25000000";
          positiont0 = await getPositions(GMX_controller.address, false);
          // positiont0.forEach((elem) => console.log(elem.toString()));
        });
        it("should add a request", async function () {
          waitingPositionsT0 = await WaitingPositionsLength(GMX_POSITION_ROUTER, false);
          await GMX_controller.decreasePosition(deployer.address, tokenAmount, false, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          waitingPositionsT1 = await WaitingPositionsLength(GMX_POSITION_ROUTER, false);
          await expect(parseInt(waitingPositionsT1)).to.be.eq(
            parseInt(waitingPositionsT0) + 1
          );
        });
        it("should validate the request", async function () {
          await executeDecreasePositions();
          await expect(await WaitingPositionsStart(GMX_POSITION_ROUTER, (false))).to.be.equal(
            await WaitingPositionsLength(GMX_POSITION_ROUTER, false)
          );
        });
        it("should having reduced the position", async function () {
          positiont1 = await getPositions(GMX_controller.address, false);
          // positiont1.forEach((elem) => console.log(elem.toString()));
          await expect(positiont1[0]).to.not.equal(positiont0[0]);
        });
      });
      describe("should NOT close a SHORT ETH/USDC", function () {
        it("should not add a request", async function () {
          await expect(GMX_controller.connect(accounts[2]).decreasePosition(deployer.address, tokenAmount, false, {
            value: keepersFee,
            gasLimit: 10000000,
          })).to.be.revertedWith("Not vault")
        });
      });
      describe("should liquidate the SHORT ETH/USDC", function () {
        before(async function () {
          tokenAmount3 = "55000000";
          await USDC.approve(GMX_controller.address, parseInt(tokenAmount3));
          await GMX_controller.increasePosition(tokenAmount3, false, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          await executeIncreasePositions();
        });
        it("should add a request", async function () {
          waitingPositionsT0 = await WaitingPositionsLength(GMX_POSITION_ROUTER, false);
          await GMX_controller.liquidatePosition(false, {
            value: keepersFee,
            gasLimit: 10000000,
          });
          await expect(parseInt(await WaitingPositionsLength(GMX_POSITION_ROUTER, false))).to.be.eq(
            parseInt(waitingPositionsT0) + 1
          );
        });
        it("should validate the request", async function () {
          await executeDecreasePositions();
          await expect(await WaitingPositionsStart(GMX_POSITION_ROUTER, (false))).to.be.equal(
            await WaitingPositionsLength(GMX_POSITION_ROUTER, false)
          );
        });
        it("should liquidate the position", async function () {
          expect((await getPositions(GMX_controller.address, false))[0]).to.be.eq("0");
        });
      });
      describe("should NOT liquidate a SHORT ETH/USDC", function () {
        it("should not add a request", async function () {
          await expect(GMX_controller.connect(accounts[2]).liquidatePosition(false, {
            value: keepersFee,
            gasLimit: 10000000,
          })).to.be.revertedWith("Not vault")
        });
      });
    });
  });
});
