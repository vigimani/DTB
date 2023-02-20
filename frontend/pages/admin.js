import Head from "next/head";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Heading,
  List,
  ListItem,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useContractProvider } from "@/context/ContractContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ethers } from "ethers";
import { ABIS, ADDRESS } from "../utils/@config";
import { useToast } from "@chakra-ui/react";

import Adminevents from "@/components/admin/events/Adminevents";
import Initialisation from "@/components/admin/Initialisation";
import Adminoperations from "@/components/admin/Adminoperations";
import Adminreader from "@/components/admin/Adminreader";

export default function Admin() {
  const { isConnected, isOwner, signer, updateData, expo, setExpo, setExposition } = useContractProvider();
  const toast = useToast();
  const [isTokenaccepted, setIstokenaccepted] = useState(false);
  const [gmxcontroller, setGmxcontroller] = useState();
  const [netassetvalue, setNetassetvalue] = useState();
  const [newtoken, setNewtoken] = useState();
  const [removetoken, setRemovetoken] = useState();

  useEffect(() => {
    if (isConnected && isOwner) {
      getcontrollerGMX();
    }
  }, []);

  const bgCard = useColorModeValue("white", "gray.600");
  const colortext = useColorModeValue("#594B7E", "white");

  const controllerGMX = async () => {
    try {
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_VAULTADDRESS,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.setGMX_controller(
        process.env.NEXT_PUBLIC_GMXCONTROLADDRESS,
        { gasLimit: 100000 }
      );
      await tx.wait(1);
      toast({
        title: "Succes!",
        description: "Controller set",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Error",
        description: "An error occured, please try again...",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const getcontrollerGMX = async () => {
    const contract = new ethers.Contract(ADDRESS.MYVAULT, ABIS.MYVAULT, signer);
    let tx = await contract.getGMX_controller({ gasLimit: 1000000 });
    setGmxcontroller(tx);
  };
  const addToken = async (_addr) => {
    try {
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.acceptToken(_addr);
      await tx.wait(1);
      setNewtoken("");
      toast({
        title: "Succes!",
        description: "Token added",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Error",
        description: "An error occured, please try again...",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const removeToken = async (_addr) => {
    try {
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.removeToken(_addr);
      await tx.wait(1);
      setRemovetoken("");
      toast({
        title: "Succes!",
        description: "Token added",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Error",
        description: "An error occured, please try again...",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const tokenaccept = async (_addr) => {
    try {
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.isAccepted(_addr);
      if (tx) {
        setIstokenaccepted(true);
      } else {
        setIstokenaccepted(false);
      }
    } catch {
      setIstokenaccepted(false);
    }
  };

  const openpos = async () => {
    try {
      let keepersFee = ethers.utils.parseEther("0.0001");
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.openPosition({
        value: keepersFee,
        gasLimit: 2000000,
      });
      await tx.wait(1);
      updateData();
      toast({
        title: "Succes!",
        description: "Position openned",
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
  const liquidatelongpos = async () => {
    try {
      let keepersFee = ethers.utils.parseEther("0.0001");
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.liquidateLongPositions({
        value: keepersFee,
        gasLimit: 10000000,
      });
      await tx.wait(1);
      updateData();
      toast({
        title: "Succes!",
        description: "Longed position liquidated",
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
  const liquidateshortpos = async () => {
    try {
      let keepersFee = ethers.utils.parseEther("0.0001");
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.liquidateShortPositions({
        value: keepersFee,
        gasLimit: 10000000,
      });
      await tx.wait(1);
      updateData();
      toast({
        title: "Succes!",
        description: "Short exposition liquidated",
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
  const waitingPositionsLength = async (isIncrease) => {
    const GMX_POSITION_ROUTER = new ethers.Contract(
      ADDRESS.GMX_POSITION_ROUTER,
      ABIS.GMX_POSITION_ROUTER,
      signer
    );
    let a = isIncrease ? 1 : 3;
    return (
      await ("getRequestQueueLengths",
      await GMX_POSITION_ROUTER.getRequestQueueLengths())
    )[a].toString();
  };
  const exeincreasepos = async () => {
    try {
      const GMX_POSITION_ROUTER = new ethers.Contract(
        ADDRESS.GMX_POSITION_ROUTER,
        ABIS.GMX_POSITION_ROUTER,
        signer
      );
      await GMX_POSITION_ROUTER.executeIncreasePositions(
        parseInt(await waitingPositionsLength(true)),
        process.env.NEXT_PUBLIC_GMXCONTROLADDRESS,
        { gasLimit: 3000000 }
      );
      updateData();
      toast({
        title: "Succes!",
        description: "Increased positions validated",
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
  const exedecreasepos = async () => {
    try {
      const GMX_POSITION_ROUTER = new ethers.Contract(
        ADDRESS.GMX_POSITION_ROUTER,
        ABIS.GMX_POSITION_ROUTER,
        signer
      );
      await GMX_POSITION_ROUTER.executeDecreasePositions(
        parseInt(await waitingPositionsLength(false)),
        process.env.NEXT_PUBLIC_GMXCONTROLADDRESS,
        { gasLimit: 3000000 }
      );
      updateData();
      toast({
        title: "Succes!",
        description: "Decrease positions validated",
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
  const updatenetassetvalue = async () => {
    try {
      const contract = new ethers.Contract(
        ADDRESS.MYVAULT,
        ABIS.MYVAULT,
        signer
      );
      let tx = await contract.updateNetAssetValue();
      await tx.wait(1);
      let tx2 = await contract.getNetAssetValue();
      setNetassetvalue(tx2.toString());
      toast({
        title: "Succes!",
        description: "NAV updated",
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

  return (
    <>
      <Head>
        <title>PLP</title>
        <meta name="description" content="Decentralized Trading Bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        minHeight="100vh"
        w="100%"
        justifyContent={"center"}
        backgroundImage="bg_clair.png"
        backgroundSize="cover"
      >
        <Flex w="1280px" direction="column">
          <Header />

          <Flex h="100%" justifyContent={"center"}>
            <Initialisation
              removeToken={removeToken}
              setRemovetoken={setRemovetoken}
              tokenaccept={tokenaccept}
              addToken={addToken}
              setNewtoken={setNewtoken}
              controllerGMX={controllerGMX}
              gmxcontroller={gmxcontroller}
              newtoken={newtoken}
              removetoken={removetoken}
              isTokenaccepted={isTokenaccepted}
              getcontrollerGMX={getcontrollerGMX}
            />
            <Adminoperations
              liquidatelongpos={liquidatelongpos}
              liquidateshortpos={liquidateshortpos}
              updatenetassetvalue={updatenetassetvalue}
              exeincreasepos={exeincreasepos}
              exedecreasepos={exedecreasepos}
              openpos={openpos}
              setExposition={setExposition}
              netassetvalue={netassetvalue}
              expo={expo}
            />
            <Adminreader expo={expo} setExpo={setExpo} />
          </Flex>

          <Flex w="100%" alignSelf={"center"} direction="column">
            <Adminevents />
          </Flex>

          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
