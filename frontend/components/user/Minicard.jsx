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
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  Th,
  Icon,
} from "@chakra-ui/react";
import { ABIS, ADDRESS } from "../../utils/@config";
import { useState, useEffect } from "react";
import { useContractProvider } from "@/context/ContractContext";
import { ethers } from "ethers";
import { timestampconvert } from "@/utils/utilsfunction";
import { FaWallet } from "react-icons/fa";

export default function Minicard({title, data, unity, icon}) {
  return (
    <>
      <Box w="18%" boxShadow={"md"} p="20px" bg="white" borderRadius={"20px"}>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Flex direction="column">
            <Flex
              color="gray.400"
              fontFamily={"Kanit"}
              fontSize="xs"
              fontWeight="bold"
            >
              {title}
            </Flex>
            <Text fontFamily={"Kanit"} fontSize="xl" fontWeight="bold" color="#594B7E">
              {data} {unity}
            </Text>
          </Flex>
          <Flex
            h="40px"
            w="40px"
            me="12px"
            borderRadius="10px"
            bgColor="#9FACE6"
            alignItems={"center"}
            justifyContent="center"
            alignContent={"center"}
          >
            <Icon color="white" as={icon} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
