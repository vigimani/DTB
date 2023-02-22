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
import { Separator } from "@/components/others/Separator";
import { ABIS, ADDRESS } from "../../utils/@config";

import { ethers } from "ethers";
import { useContractProvider } from "@/context/ContractContext";

export default function Adminreader({expo, setExpo}) {
  const {
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
    updateData
  } = useContractProvider();
  const bgCard = useColorModeValue("white", "gray.600");
  const colortext = useColorModeValue("#594B7E", "white");

  return (
    <>
      <Flex w="33%" ml="1rem" direction="column">
        <Heading color={colortext}>Reader</Heading>
        <Flex
          boxShadow={"0px 0px 10px"}
          flexDirection={"column"}
          p="10px"
          mt="1rem"
          borderRadius="10px"
          bg={bgCard}
          color={colortext}
        >
          <Flex mt="1rem" flexDirection={"column"}>
            <Button mb="1rem" onClick={() => updateData()}>
              Update Data
            </Button>
            <Text>PLP supply : {totalsupply}</Text>
            <Text>Share price : {shareprice}</Text>
            <Text>NAV : {navcalculated}</Text>
            <Text>VAULT USDC : {vaultusdc}</Text>
            <Flex mb="1rem" mt="1rem">
              <Flex w="50%" flexDirection={"column"}>
                <Flex fontWeight={"bold"}>LONG</Flex>
                <Flex>Size : {longsize}</Flex>
                <Flex>Collateral : {longcollateral}</Flex>
                <Flex>Delta : {longdelta}</Flex>
                <Flex mb="5px">Leverage : {longleverage}</Flex>
              </Flex>
              <Flex
                w="3px"
                h="100%"
                bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
                mr="5px"
              ></Flex>
              <Flex w="50%" flexDirection={"column"}>
                <Flex fontWeight={"bold"}>SHORT</Flex>
                <Flex>Size : {shortsize}</Flex>
                <Flex>Collateral : {shortcollateral}</Flex>
                <Flex>Delta : {shortdelta}</Flex>
                <Flex>Leverage : {shortleverage}</Flex>
              </Flex>
            </Flex>
            <Separator />
            <Flex mt="1rem">Waiting Increase pos : {increasePosition}</Flex>
            <Flex>Waiting Decrease pos : {decreasePosition}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
