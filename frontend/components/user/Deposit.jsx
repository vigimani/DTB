import {
  Image,
  Flex,
  Text,
  Box,
  HStack,
  Stack,
  Switch,
  Button,
  useColorModeValue,
  useColorMode,
  IconButton,
  colorMode,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Input,
  NumberInputField,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContractProvider } from "@/context/ContractContext";
import { useState, useEffect } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import abiVault from "../../assets/abi-MyVault.json";
import { useToast } from "@chakra-ui/react";
import { ethers } from "ethers";
import { ADDRESS, ABIS } from "../../utils/@config";
import { numberWithSpaces } from "@/utils/utilsfunction";
export default function Deposit() {
  const { usdcBalance, updateUsdcBalance, updatePlpBalance, signer, updateData } =
    useContractProvider();
  const toast = useToast();

  const [depositAmount, setDepositAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const deposit = async () => {
    setIsLoading(true);
    try {
      let keepersFee = ethers.utils.parseEther("0.0001");
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_VAULTADDRESS,
        abiVault,
        signer
      );
      let depositAmountUSDC = ethers.utils
        .parseEther(depositAmount)
        .div(10 ** 12);
        console.log(depositAmount)
        console.log(depositAmountUSDC.toString())
      let fees = ethers.utils.parseEther("100");
      let usdc = await new ethers.Contract(ADDRESS.USDC, ABIS.ERC20, signer);
      let a = await usdc.approve(
        process.env.NEXT_PUBLIC_VAULTADDRESS,
        depositAmountUSDC
      );
      await a.wait(1);
      let transaction = await contract.deposit(
        ADDRESS.USDC,
        depositAmountUSDC,
        { value: keepersFee, gasLimit: 1000000 }
      );
      await transaction.wait(1);
      await updateUsdcBalance();
      await updatePlpBalance();
      await updateData()
      toast({
        title: "Congratulations!",
        description:
          "Your have sent " + String(depositAmount) + " usdc to the vault",
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
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Flex
        borderWidth={"1px"}
        borderColor={"#594B7E"}
        borderRadius="8px"
        p="5px"
        bg="#F4F6FE"
        w="100%"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Flex p="5" alignItems={"center"} h="100%">
          <Flex borderRadius="8px" bg="#2775CA" alignItems={"center"}>
            <Image
              boxSize="50px"
              objectFit="cover"
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
              alt="USDC"
            />
          </Flex>
          <Flex ml="1rem" direction="column" h="100%">
            <Flex fontFamily={"Kanit"}>
              {/* <Input value={depositAmount} w="100px" type="number" fontSize={"md"} h="32px" placeholder='0' borderColor={"transparent"} onChange={(e) => setDepositAmount(e.target.value)}/> */}

              <Input
                w="100px"
                type="number"
                fontSize={"md"}
                placeholder="0"
                borderColor={"transparent"}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
              <Flex ml="1rem" alignSelf={"center"}>
                USDC
              </Flex>
            </Flex>
            <Flex fontSize={"xs"}>Max {numberWithSpaces(usdcBalance.toFixed(0))} USDC</Flex>
          </Flex>
        </Flex>
        <Flex p="5">
          {/* <Button
                          borderWidth={"1px"}
                          borderColor={"#594B7E"}
                          borderRadius="8px"
                          fontFamily={"Kanit"}
                          fontSize="2xs"
                          h="30px"
                          onClick={()=> setDepositAmount(usdcBalance)}
                        >
                          MAX
                        </Button> */}
        </Flex>
      </Flex>
      <Flex mb="1rem" alignItems={"center"}>
        <Button
          _hover={{
            bg: "#594B7E",
            color: "white",
          }}
          w="100%"
          mt="1rem"
          onClick={() => deposit()}
        >
          Deposit
        </Button>
      </Flex>
      <Flex mb="1rem" alignItems={"center"}>
        <InfoIcon color="#594B7E" />
        <Text ml="1rem" fontSize={"xs"}>
          For the moment you can only deposit USDC!
        </Text>
      </Flex>
    </>
  );
}
