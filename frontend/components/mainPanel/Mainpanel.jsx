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
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PhoneIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import Account from "./Account";
// import Graph from "./Graph";

export default function Mainpanel() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex mt="0.5rem" w="100%">
        <Flex
          direction="column"
          mr="1rem"
          borderRadius={"30px"}
          w="70%"
          display="flex"
          position="relative"
        >
          <Box
            boxShadow={"md"}
            p="25px"
            bg="white"
            borderRadius={"30px"}
            mb="1rem"
          >
            <Flex w="100%" direction="column">
            <Flex color="#594B7E" fontFamily={"Kanit"} fontSize="lg" fontWeight="bold" mb="6px">
                Decentralized Trading Bot
              </Flex>
              <Flex color="#9face6" fontFamily={"Kanit"} fontSize="md" fontWeight="bold" mb="6px">
                Overview
              </Flex>
              <Text fontSize={"xs"} fontFamily={"Kanit"} mb="1rem">The goal of Brokkr Calm Portfolio is to provide stable returns that are independent on any market condition. The portfolio diversifies the funds in various stablecoin liquidity pools that generate swapping fees from other people trading. It provides stability and predictability by diversifying the funds and using only stablecoins. This makes it a perfect choice for a bear market. Each withdrawal is charged with a 0.15% fee</Text>
              <Flex w="100%">
                <Text  color="#9face6"  fontFamily={"Kanit"} fontSize="md" fontWeight="bold" mb="6px">
                  Past performances
                </Text>
              </Flex>
              {/* <Graph /> */}
            </Flex>
          </Box>
          <Box h="60%" bg="black" borderRadius={"30px"} mt="1rem">
            {"test "}
          </Box>
        </Flex>

        <Account />
      </Flex>
      <Flex h="20vh" w="100%" bg="red" mt="2rem">
        Bandeau du bas
      </Flex>
    </>
  );
}
