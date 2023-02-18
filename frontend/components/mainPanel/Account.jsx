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
  NumberInputField
} from "@chakra-ui/react";
import Link from "next/link";
import { useContractProvider } from "@/context/ContractContext";
import { useState, useEffect } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import abiVault from "./../../assets/abi-MyVault.json";
import { useToast } from "@chakra-ui/react";
import { ethers } from 'ethers';
import TokenList from "./../../assets/token-list-arbitrum.json";
import { ADDRESS, ABIS } from "@/context/@config";

export default function Account() {
  const { usdcBalance, updateUsdcBalance, signer, provider } = useContractProvider();

  const colors = useColorModeValue(["red.50", "teal.50"]);
  const [tabIndex, setTabIndex] = useState(0);

  // const activeBg = useColorModeValue(["white", "gray.700"]);
  // const inactiveBg = useColorModeValue(["red", "gray.700"]);
  // const bg = activeBg[tabIndex];
  const toast = useToast()

  const [depositAmount, setDepositAmount] = useState()
  const [withdrawAmount, setWithdrawAmount] = useState()
  const [isLoading, setIsLoading] = useState(false)
  


  const deposit = async() => {
    setIsLoading(true)
    try {
      const contract = new ethers.Contract(process.env.NEXT_PUBLIC_VAULTADDRESS, abiVault, signer)
      let depositAmountUSDC = ethers.utils.parseEther(depositAmount).div(10**12)
      let fees = ethers.utils.parseEther("100")
      let usdc = await new ethers.Contract(ADDRESS.USDC, ABIS.ERC20, signer);
      let a = await usdc.approve(process.env.NEXT_PUBLIC_VAULTADDRESS, depositAmountUSDC)
      await a.wait(1)
      let transaction = await contract.deposit(TokenList[3].address, depositAmountUSDC, {value : 1000000, gasLimit : 1000000})
      await transaction.wait(1)
      await updateUsdcBalance()
      toast({
        title: 'Congratulations!',
        description: "Your have sent "+ String(depositAmount) +" ethers to the vault",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    catch (e){
      toast({
        title: 'Error',
        description: "An error occured, please try again...",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      console.error(e)
    }
    setIsLoading(false)
  }
  

  return (
    <>
      <Flex
        ml="1rem"
        borderRadius={"30px"}
        p="25px"
        bg="white"
        w="30%"
        position="relative"
        boxShadow={"md"}

      >
        <Flex w="100%" direction="column">
          <Flex w="100%">
            <Text color="#594B7E" fontFamily={"Kanit"} fontSize="lg" fontWeight="bold" mb="6px">
              Wallet
            </Text>
          </Flex>
          <Flex w="100%">
            <Tabs w="100%" onChange={(index) => setTabIndex(index)}>
              <Flex borderRadius="10px" p="5px" bg="#F4F6FE" w="100%">
                <TabList w="100%" justifyContent={"space-evenly"}>
                  <Tab
                    w="100%"
                    borderRadius="10px"
                    bg={tabIndex == 0 ? "#9Face6" : ""}
                    color={tabIndex == 0 ? "white" : "gray.400"}
                    fontWeight="extrabold"
                    fontFamily={"Kanit"}
                  >
                    Deposit
                  </Tab>

                  <Tab
                    w="100%"
                    borderRadius="10px"
                    bg={tabIndex == 1 ? "#9Face6" : ""}
                    color={tabIndex == 1 ? "white" : "gray.400"}
                    fontWeight="extrabold"
                    fontFamily={"Kanit"}
                  >
                    Withdraw
                  </Tab>
                </TabList>
              </Flex>

              <TabPanels w="100%" mt="1rem">
                <TabPanel w="100%" p="0">
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
                      <Flex ml="1rem" direction="column" h="100%" >
                        <Flex fontFamily={"Kanit"}>
                        {/* <Input value={depositAmount} w="100px" type="number" fontSize={"md"} h="32px" placeholder='0' borderColor={"transparent"} onChange={(e) => setDepositAmount(e.target.value)}/> */}

                        <Input w="100px" type="number" fontSize={"md"} placeholder='0' borderColor={"transparent"} onChange={(e) => setDepositAmount(e.target.value)}/>
                        <Flex ml="1rem" alignSelf={"center"}>USDC</Flex>
                        </Flex>
                        <Flex fontSize={"xs"}>
                            {usdcBalance} USDC
                        </Flex>
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
                        color: "white"
                    }}
                    w="100%" 
                    mt="1rem"
                    onClick={()=> deposit()}
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
                </TabPanel>

                <TabPanel>ed, yellow and blue.</TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
