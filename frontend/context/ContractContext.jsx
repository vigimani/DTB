import React, { useEffect, useContext, useState } from "react";
import { ethers } from "ethers";
import { useAccount, useProvider, useSigner } from "wagmi";
import { useToast } from "@chakra-ui/react";
import { ABIS, ADDRESS } from "./../utils/@config";

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
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();
  //chakraUI
  const toast = useToast();
  //Dapp ownership
  const [isOwner, setIsOwner] = useState(false);
  const [usdcBalance, setusdcBalance] = useState(0);
  const [plpBalance, setplpBalance] = useState(0);
  const [expo, setExpo] = useState(0);
    //data
  const [increasePosition, setIncreasePosition] = useState();
  const [decreasePosition, setDecreasePosition] = useState();
  const [totalsupply, setTotalsupply] = useState(0);
  const [vaultusdc, setVaultusdc] = useState(0);
  const [navcalculated, setNavcalculated] = useState(0);
  const [shareprice, setShareprice] = useState(0);
  const [longsize, setLongsize] = useState(0);
  const [longcollateral, setLongcollateral] = useState(0);
  const [longavgprice, setLongavgprice] = useState(0);
  const [longdelta, setLongdelta] = useState(0);
  const [longleverage, setLongleverage] = useState(0);
  const [shortsize, setShortsize] = useState(0);
  const [shortcollateral, setShortcollateral] = useState(0);
  const [shortavgprice, setShortavgprice] = useState(0);
  const [shortdelta, setShortdelta] = useState(0);
  const [shortleverage, setShortleverage] = useState(0);
  useEffect(() => {
    if (isConnected) {
      checkOwner();
      updateUsdcBalance();
      updatePlpBalance();
      getExpo();
      updateData();
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
      updateData();
      updateUsdcBalance();
      updatePlpBalance();
      getExpo();
    }
  }, []);

  const checkOwner = async () => {
    const myvaultContract = await new ethers.Contract(
      ADDRESS.MYVAULT,
      ABIS.MYVAULT,
      provider
    );
    let owner = await myvaultContract.owner();
    if (address == owner) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  };

  const updateUsdcBalance = async () => {
    if (isConnected) {
      let usdc = await new ethers.Contract(ADDRESS.USDC, ABIS.ERC20, provider);
      let balance =
        parseInt((await usdc.balanceOf(address)).toString()) / 10 ** 6;
      setusdcBalance(balance);
    }
  };
  const updatePlpBalance = async () => {
    if (isConnected) {
      let plp = await new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.ERC20,
        provider
      );
      let balance =
        parseInt((await plp.balanceOf(address)).toString()) / 10 ** 18;
      setplpBalance(balance);
    }
  };
  const setExposition = async (value) => {
    try {
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.setExposition(value);
      await tx.wait(1);
      setExpo(value);
      toast({
        title: "Succes!",
        description: "Exposition changed",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Error",
        description: "An error occured, please try again...",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const getExpo = async () => {
    if (isConnected) {
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        provider
      );
      let tx = await contract.getExposition();
      setExpo(tx);
    }
  };
  const getPositions = async (_addr, _isLong) => {
    let collateralToken = _isLong ? ADDRESS.WETH : ADDRESS.USDC;
    const GMX_READER = new ethers.Contract(
      ADDRESS.GMX_READER,
      ABIS.GMX_READER,
      provider
    );
    let response = await GMX_READER.getPositions(
      ADDRESS.GMX_VAULT,
      _addr,
      [collateralToken],
      ["0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"],
      [_isLong]
    );
    return response;
  };
  const updateData = async () => {
    let responseLong = await getPositions(
      process.env.NEXT_PUBLIC_GMXCONTROLADDRESS,
      true
    );
    let responseShort = await getPositions(
      process.env.NEXT_PUBLIC_GMXCONTROLADDRESS,
      false
    );
    const VAULTCONTRACT = new ethers.Contract(
      ADDRESS.MYVAULT,
      ABIS.MYVAULT,
      provider
    );
    const GMX_POSITION_ROUTER = new ethers.Contract(
      ADDRESS.GMX_POSITION_ROUTER,
      ABIS.GMX_POSITION_ROUTER,
      provider
    );
    const USDC = new ethers.Contract(ADDRESS.USDC, ABIS.ERC20, provider);

    let totalSupply = parseInt((await VAULTCONTRACT.totalSupply()).toString());
    setTotalsupply(totalSupply / 10 ** 18);

    let expo = parseInt((await VAULTCONTRACT.getExposition()).toString());
    setExpo(expo);
    let balanceUSDC = parseInt(
      (await USDC.balanceOf(ADDRESS.MYVAULT)).toString()
    );
    setVaultusdc(balanceUSDC / 10 ** 6);

    let NAV =
      parseInt(responseLong[1].toString()) +
      parseInt(responseShort[1].toString()) +
      parseInt(responseShort[8].toString()) +
      parseInt(responseLong[8].toString()) +
      parseInt(balanceUSDC.toString());
    setNavcalculated(NAV / 10 ** 30);

    let shareprice = totalSupply == 0 ? 0 : NAV / totalSupply / 10 ** 12;
    setShareprice(shareprice);

    setLongsize(parseInt(responseLong[0].toString()) / 10 ** 30);
    setLongcollateral(parseInt(responseLong[1].toString()) / 10 ** 30);
    setLongavgprice(parseInt(responseLong[2].toString()) / 10 ** 30);
    setLongdelta(parseInt(responseLong[8].toString()) / 10 ** 30);
    let longlev =
      parseInt(responseLong[0].toString()) /
      parseInt(responseLong[1].toString());
    setLongleverage(longlev);

    setShortsize(parseInt(responseShort[0].toString()) / 10 ** 30);
    setShortcollateral(parseInt(responseShort[1].toString()) / 10 ** 30);
    setShortavgprice(parseInt(responseShort[2].toString()) / 10 ** 30);
    setShortdelta(parseInt(responseShort[8].toString()) / 10 ** 30);
    let shortlev =
      parseInt(responseShort[0].toString()) /
      parseInt(responseShort[1].toString());
    setShortleverage(shortlev);

    let x = await ("getRequestQueueLengths",
    await GMX_POSITION_ROUTER.getRequestQueueLengths());
    setDecreasePosition(parseInt(x[3].toString()) - parseInt(x[2].toString()));
    setIncreasePosition(parseInt(x[1].toString()) - parseInt(x[0].toString()));
  };

  return (
    <ContractContext.Provider
      value={{
        isConnected,
        address,
        isOwner,
        signer,
        updateUsdcBalance,
        updatePlpBalance,
        usdcBalance,
        plpBalance,
        provider,
        totalsupply,
        shareprice,
        navcalculated,
        vaultusdc,
        longsize,
        longcollateral,
        longdelta,
        longleverage,
        longavgprice,
        increasePosition,
        decreasePosition,
        shortsize,
        shortcollateral,
        shortavgprice,
        shortdelta,
        shortleverage,
        expo,
        setExposition,
        updateData,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContext;
