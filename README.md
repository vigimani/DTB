# PLP Decentralized Trading Bot Dapp  #Alyra 

PLP est une vault d'investissement qui permet à ses utilisateurs de bénéficier des analyses d'un algoritme de trading. Dans cette vault les utilisateurs peuvent investir en USDC, ils reçoivent en échange des actions (un token le PLP) représentant un pourcentage de cette vault. En parallèle leur investissement est placé sur GMX et tradé en fonction de nombreux indicateurs. Lorsqu'ils souhaitent retirer leur investissement, un calcul de la valeur de la vault se fait et liquide en conséquence une partie de la position sur GMX pour le renvoyer à l'utilisateur.

Développé pour le réseau Arbitrum mais deployé sur Goerli pour l'exercice 

-----------------

## Fonctionnal scheme
![alt text](https://github.com/vigimani/DTB/blob/main/schema.png)


## Stack technique used
 * __Yarn__ @1.22.19

 Backend : 
 * __Solidity__ v0.8.17
 * __Hardhat__ : 
    * __hardhat-deploy__ 
    * __hardhat-docgen__
    * __hardhat-ethernal__
    * __hardhat-gas-reporter__
 * __OpenZeppelin__ 
    * __Ownable.sol__
    * __ERC20.sol__
    * __ReentrancyGuard.sol__

 * Testing : 
    * __Chai__
    * __Mocha__
    * tested on arbitrum fork

 
 Frontend :
 * __NextJS__ for react development
 * __Chakra UI__
 * __ethers.js__
 *  __Rainbowkit__
 * __Wagmi__
 * __Apexcharts__



## Visuals of the Dapp
![alt text](https://github.com/vigimani/DTB/blob/main/1.png)

## Useful links
* [Loom video presentation](https://www.loom.com/share/ca6deeadc1954c4985c00cbd6281de38)
* Etherscan contracts address on Goerli:
    - [Vault PLP](https://goerli.etherscan.io/address/0x93bE4BEA16A5bB42B898f8b518b44f457b9aBC7D)
    - [Controller GMX](https://goerli.etherscan.io/address/0xC443C22FCd4cAecf4bcb9cC3fFBf5b10121F3C96)
