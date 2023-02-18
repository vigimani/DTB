import React, { useEffect, useContext, useState } from "react";
import { ethers } from "ethers";
import { useAccount, useBalance, useProvider, useSigner } from "wagmi";
import { useToast } from "@chakra-ui/react";
import { erc20ABI } from "wagmi";
import abiVault from "../assets/abi-MyVault.json";
import TokenList from "../assets/token-list-arbitrum.json";

const ContractContext = React.createContext(null);
export function useContractProvider() {
  const context = useContext(ContractContext);
  if (!context) {
    throw new Error(
      "useContractProvider must be used within a ContractProvider"
    );
  }
  return context;
}

export const ContractProvider = ({ children }) => {
  const vaultAddress = process.env.NEXT_PUBLIC_VAULTADDRESS;
  const controllerAddres = process.env.NEXT_PUBLIC_GMXCONTROLADDRESS;
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  //chakraUI
  const toast = useToast();

  //Dapp ownership
  const [isOwner, setIsOwner] = useState(false);
  const [usdcBalance, setusdcBalance] = useState(0);

  useEffect(() => {
    if (isConnected) {
      checkOwner();
      updateUsdcBalance();
      toast({
        title: "Connected",
        description: "Welcome, you are connected with the address : " + address,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [address, isConnected]);

  useEffect(() => {
    if (isConnected) {
      checkOwner();
      updateUsdcBalance();
    }
  }, []);

  const checkOwner = async () => {
    const contract = await new ethers.Contract(
      vaultAddress,
      abiVault,
      provider
    );
    let owner = await contract.owner();
    if (address == owner) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  };

  const updateUsdcBalance = async () => {
    if (isConnected) {
      let usdc = await new ethers.Contract(TokenList[3].address, erc20ABI, provider);
      let balance =
        parseInt((await usdc.balanceOf(address)).toString()) / 10 ** 6;
      setusdcBalance(balance);
    }
  };

  return (
    <ContractContext.Provider
      value={{
        vaultAddress,
        controllerAddres,
        isConnected,
        isOwner,
        signer,
        // deposit,
        updateUsdcBalance,
        usdcBalance,
        provider
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContext;
