import { Flex, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import Navevent from "./Navevent";
import Transactions from "./Transactions";
export default function Adminevents({}) {
  const bgCard = useColorModeValue("white", "gray.600");
  const colortext = useColorModeValue("#594B7E", "white");
  return (
    <>
      <Flex w="100%" direction="column">
        <Heading color={colortext}>Events</Heading>
        <Flex
          boxShadow={"0px 0px 10px"}
          flexDirection={"column"}
          p="10px"
          mt="1rem"
          borderRadius="10px"
          bg={bgCard}
          color={colortext}
          w="100%"
        >
          <Text color={colortext} fontWeight={"bold"} fontSize={"2xl"}>
            Transactions
          </Text>
          <Flex mt="1rem" flexDirection={"column"}>
            <Transactions />
          </Flex>
        </Flex>
        <Flex
          boxShadow={"0px 0px 10px"}
          flexDirection={"column"}
          p="10px"
          mt="1rem"
          borderRadius="10px"
          bg={bgCard}
          color={colortext}
          w="100%"
        >
          <Text color={colortext} fontWeight={"bold"} fontSize={"2xl"}>
            Nav event
          </Text>
          <Flex mt="1rem" flexDirection={"column"}>
            <Navevent />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
