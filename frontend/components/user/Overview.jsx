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
  import Operation from "./Operation";
  import Mytransactions from "./Mytransactions";
  import Data from "./Data";
  import Graph from "./Graph";
  
  export default function Overview() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <>
          <Flex
            direction="column"
            mr="1rem"
            borderRadius={"30px"}
            w="70%"
            display="flex"
          >
            <Box
              boxShadow={"md"}
              p="25px"
              bg="white"
              borderRadius={"30px"}
            >
              <Flex w="100%" direction="column">
                <Flex
                  color="#594B7E"
                  fontFamily={"Kanit"}
                  fontSize="lg"
                  fontWeight="bold"
                  mb="6px"
                >
                  Overview
                </Flex>
                <Flex
                  color="#9face6"
                  fontFamily={"Kanit"}
                  fontSize="md"
                  fontWeight="bold"
                  mb="6px"
                >
                  Presentation
                </Flex>
                <Text fontSize={"md"} fontFamily={"Kanit"} mb="1rem">
                  Polyplus is an algorithm that analyzes the cryptocurrency market according to multiple 
                  indicators gathered over time. 
                  Each ivnestment gives right to shares of the investment fund (PLP) and your funds are automatically 
                  invested following the bot recommendation through a perpetual exchange (GMX). 
                  Each deposit is charged with a 1% fee in order to cover price of transactions. 
                </Text>
                <Flex w="100%" direction="column" mb="6px">
                  <Text
                    color="#9face6"
                    fontFamily={"Kanit"}
                    fontSize="md"
                    fontWeight="bold"
                    
                  >
                    Past performances
                  </Text> 
                  <Text fontWeight={"thin"} fontFamily={"Kanit"} >base 100</Text>
                </Flex>
                <Graph />
              </Flex>
            </Box>
          </Flex>
      </>
    );
  }
  