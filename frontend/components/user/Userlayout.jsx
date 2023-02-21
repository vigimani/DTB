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
import Operation from "./Operation";
import Mytransactions from "./Mytransactions";
import Data from "./Data";
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
      >
        <Data />
          <Flex w="100%">
            <Mytransactions />
            </Flex>
      </Flex>
    </>
  );
}
