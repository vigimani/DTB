Version
=======
> solidity-coverage: v0.8.2

Instrumenting for coverage...
=============================

> GMX_controller.sol
> interface/gmx/IGMXPositionRouter.sol
> interface/gmx/IGMXReader.sol
> interface/gmx/IGMXRouter.sol
> interface/gmx/IGMXVault.sol
> interface/IGMXController.sol
> libraries/console.sol
> MyVault.sol

Compilation:
============

Compiled 20 Solidity files successfully
The Hardhat Network tracing engine could not be initialized. Run Hardhat with --verbose to learn more.

Network Info
============
> HardhatEVM: v2.12.6
> network:    hardhat

Compiled 20 Solidity files successfully


  GMX controller unit tests
    Deployment
0x998abeb3E57409262aE5b751f60747921B33613E
      ✔ Should deploy the contracts
      ✔ Should NOT give ownership of the controller (1740ms)
      ✔ Should give deployer the ownership of the controller (558ms)
      ✔ Should NOT modify execution fees (263ms)
      ✔ Should set execution fees
    Contract interraction with GMX
      Initialisation
        ✔ Should approved GMX Router in constructor
        ✔ Should fund deployer with USDC
        ✔ Should set a Keeper (account to validate transaction)
      Test LONG ETH/USDC
        should open a LONG ETH/USDC
          ✔ should add a request (9703ms)
          ✔ should validate the request (11196ms)
          ✔ should have a position
          ✔ should be possible to increase the long position (2376ms)
        should NOT open a LONG ETH/USDC
          ✔ should not add a request
        should close a LONG ETH/USDC
          ✔ should add a request (2040ms)
          ✔ should validate the request (788ms)
          ✔ should having reduced the position
        should liquidate the LONG ETH/USDC
          ✔ should add a request (1934ms)
          ✔ should validate the request (276ms)
          ✔ should liquidate the position
      Test SHORT ETH/USDC
        should open a SHORT ETH/USDC
          ✔ should add a request (1861ms)
          ✔ should validate the request (1220ms)
          ✔ should have a position
          ✔ should be possible to increase the short position (2048ms)
        should NOT open a SHORT ETH/USDC
          ✔ should not add a request
        should close a SHORT ETH/USDC
          ✔ should add a request (1760ms)
          ✔ should validate the request (232ms)
          ✔ should having reduced the position
        should NOT close a SHORT ETH/USDC
          ✔ should not add a request
        should liquidate the SHORT ETH/USDC
          ✔ should add a request (1884ms)
          ✔ should validate the request (212ms)
          ✔ should liquidate the position
        should NOT liquidate a SHORT ETH/USDC
          ✔ should not add a request

  Unit test for the LP Token
    deployment test
      ✔ my contract should be deployed
    test actions on token accepted to deposit
      ✔ should not accept or remove a token if not the owner
      ✔ should not remove a token if not added
      ✔ should accept a new token if not already accepted
      ✔ test if isAccepted return correct value
      ✔ should not remove a token if not the owner
      ✔ should remove a token
    test on deposit erc20
      ✔ should not deposit a token not accepted
      ✔ should not deposit a token if amount <= 0
      ✔ should deposit and receive LP Token (537ms)
      ✔ should not remove a token if not the owner
      ✔ should remove a token

  Vault unit tests
    Deployment test
      ✔ my contract should be deployed
    Basic tests on setter and getter
      ✔ should NOT set GMX controller
      ✔ should set GMX controller
      ✔ should NOT set the wanted exposition
      ✔ should set the net asset value to 0
      ✔ should set the wanted exposition
      ✔ should NOT set the exposition if same exposition
    Initialisation
      ✔ should fund user with USDC
      ✔ should set a keeper (133ms)
    GMX deposit Long expo
      ✔ should have received USDC from user
      ✔ should have sent back LP Token
      ✔ should have open long position
      ✔ should be possible to increase the long position (413ms)
      ✔ should liquidate positions (303ms)
      ✔ should change exposition from 1 to 0
    GMX deposit Short expo
      ✔ should have received USDC from user
      ✔ should have increase short position
      ✔ should be possible to increase the short position (329ms)
      ✔ should liquidate positions (240ms)
      ✔ should change exposition from 2 to 0
    Rebalancing of position and test of net asset value
      ✔ should rebalance the position after exposition changed from 0 to 1 (515ms)
      ✔ should rebalance the position of exposition changed from 1 to 2 (2642ms)
      ✔ should rebalance the position of exposition changed from 2 to 1 (2748ms)
      ✔ should rebalance the position of exposition changed from 1 to 0 (2967ms)
      ✔ should rebalance the position of exposition changed from 0 to 2 (2069ms)

  Test transactions from user on Vault on LONG exposition
    Full test on LONG position
      First deposit
        ✔ should have spend USDC accordingly
        ✔ should have open a position
        ✔ should have received 100% supply of PLP Token 
      Second deposit
        ✔ should have spend USDC accordingly
        ✔ should have increase the open position
        ✔ should have received PLP Token
        ✔ should have slightly increase share price due to GMX fees overestimated
        ✔ should display data in debug mode 
      Third deposit
        ✔ should have spend USDC accordingly
        ✔ should have increase the open position
        ✔ should have received PLP Token
        ✔ should have slightly increase share price due to GMX fees overestimated
        ✔ should display data in debug mode  
      Full withdraw of a user
        ✔ should have spend PLP accordingly
        ✔ should have decrease the open position by the value of user 3
        ✔ should have received USDC Token
        ✔ should have slightly increase share price due to GMX fees overestimated
        ✔ should display data in debug mode 

  Test transactions from user on Vault on SHORT exposition
    Full test on Neutral position
      First deposit
        ✔ tests on user balances
        ✔ tests on positions
      Second deposit
        ✔ tests on user 2
        ✔ tests on position
        ✔ report
      Third deposit
        ✔ tests on user 3
        ✔ tests on position
        ✔ report
      Withdraw of a user
        ✔ test on position
        ✔ test on users
        ✔ report

  Test transactions from user on Vault on SHORT exposition
    Full test on Short position
      First deposit
        ✔ tests on user balances
        ✔ tests on positions
      Second deposit
        ✔ tests on user 2
        ✔ report
      Third deposit
        ✔ tests on user 3
        ✔ tests on position
        ✔ report
      Withdraw of a user
        ✔ report


  106 passing (1m)

--------------------------|----------|----------|----------|----------|----------------|
File                      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------------|----------|----------|----------|----------|----------------|
 contracts/               |      100 |    91.18 |      100 |      100 |                |
  GMX_controller.sol      |      100 |      100 |      100 |      100 |                |
  MyVault.sol             |      100 |       88 |      100 |      100 |                |
 contracts/interface/     |      100 |      100 |      100 |      100 |                |
  IGMXController.sol      |      100 |      100 |      100 |      100 |                |
 contracts/interface/gmx/ |      100 |      100 |      100 |      100 |                |
  IGMXPositionRouter.sol  |      100 |      100 |      100 |      100 |                |
  IGMXReader.sol          |      100 |      100 |      100 |      100 |                |
  IGMXRouter.sol          |      100 |      100 |      100 |      100 |                |
  IGMXVault.sol           |      100 |      100 |      100 |      100 |                |
 contracts/libraries/     |        0 |      100 |        0 |        0 |                |
  console.sol             |        0 |      100 |        0 |        0 |... 2,1526,1530 |
--------------------------|----------|----------|----------|----------|----------------|
All files                 |    17.71 |    91.18 |     6.17 |    22.83 |                |
--------------------------|----------|----------|----------|----------|----------------|

> Istanbul reports written to ./coverage/ and ./coverage.json
Done in 74.42s.