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
import Overview from "./Overview";
export default function Userlayout() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex mt="0.5rem" w="100%">
        <Overview />
        <Operation />
      </Flex>
      <Flex
        direction="column"
        mt="2rem"
        borderRadius={"30px"}
        display="flex"
        position="relative"
      >
        <Data />

        <Box
          boxShadow={"md"}
          p="25px"
          bg="white"
          borderRadius={"30px"}
          mb="1rem"
          mt="2rem"
        >
          <Flex w="100%" direction="column">
            <Flex
              color="#594B7E"
              fontFamily={"Kanit"}
              fontSize="lg"
              fontWeight="bold"
              mb="6px"
            >
              My transactions
            </Flex>
            <Mytransactions />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
