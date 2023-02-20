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
  import { useToast } from "@chakra-ui/react";
  import { ethers } from "ethers";
  import { ADDRESS, ABIS } from "../../utils/@config";
  import { numberWithSpaces } from "@/utils/utilsfunction";
  export default function Withdraw() {
    const { plpBalance, updateUsdcBalance, updatePlpBalance, signer, updateData } =
      useContractProvider();
    const toast = useToast();
  
    const [withdrawAmount, setWithdrawAmount] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const withdraw = async () => {
      setIsLoading(true);
      try {
        let keepersFee = ethers.utils.parseEther("0.0001");
        const contract = new ethers.Contract(
          ADDRESS.MYVAULT,
          ABIS.MYVAULT,
          signer
        ); 
        let withdrawAmountPLP = ethers.utils
        .parseEther(withdrawAmount);
        let transaction = await contract.withdraw(
            withdrawAmountPLP,
          { value: keepersFee, gasLimit: 1000000 }
        );
        await transaction.wait(1);
        await updateUsdcBalance();
        await updatePlpBalance();
        await updateData();
        toast({
          title: "Congratulations!",
          description:
            "Your have withdrawn " + String(withdrawAmount) + " PLP to the vault",
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
                      <Flex borderRadius="8px" alignItems={"center"} bgGradient="linear(to-r, #949DD6, #594B7E)">
                      <Image boxSize="50px" objectFit="cover" src='./logoFun.png' alt='Logo' />
                      </Flex>
                      <Flex ml="1rem" direction="column" h="100%" >
                        <Flex fontFamily={"Kanit"}>
                        {/* <Input value={depositAmount} w="100px" type="number" fontSize={"md"} h="32px" placeholder='0' borderColor={"transparent"} onChange={(e) => setDepositAmount(e.target.value)}/> */}

                        <Input w="100px" type="number" fontSize={"md"} placeholder='0' borderColor={"transparent"} onChange={(e) => setWithdrawAmount(e.target.value)}/>
                        <Flex ml="1rem" alignSelf={"center"}>PLP</Flex>
                        </Flex>
                        <Flex fontSize={"xs"}>
                            Max {numberWithSpaces(plpBalance.toFixed(2))} PLP
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex p="5">
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
                    onClick={()=> withdraw()}
                    >
                      Withdraw
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
  