import {
  Flex,
  Box,
  Text,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
export default function Operation() {
  const [tabIndex, setTabIndex] = useState(0);
  const bgCard = useColorModeValue("white", "gray.600");
  const colortext = useColorModeValue("#594B7E", "white");
  const colorfond2 = useColorModeValue("", "gray.400");
  const colordepwith = useColorModeValue("#9face6","gray.600")
  return (
    <>
          <Flex
            direction="column"
            ml="1rem"
            borderRadius={"30px"}
            w="30%"
            display="flex"

          >
            <Box
              boxShadow={"md"}
              p="25px"
              borderRadius={"30px"}
              bg={bgCard}
              color={colortext}
            >
          <Flex w="100%" direction="column">
            <Flex w="100%">
            <Text color={colortext} fontFamily={"Kanit"} fontSize="lg" fontWeight="bold" mb="6px">
              Operation
            </Text>
          </Flex>
          <Flex w="100%">
            <Tabs w="100%" onChange={(index) => setTabIndex(index)}>
              <Flex borderRadius="10px" p="5px" bg="#F4F6FE" w="100%">
                <TabList w="100%" justifyContent={"space-evenly"}>
                  <Tab
                    w="100%"
                    borderRadius="10px"
                    bg={tabIndex == 0 ? colordepwith : "#F4F6FE"}
                    color={tabIndex == 0 ? "white" : "gray.600"}
                    fontWeight="extrabold"
                    fontFamily={"Kanit"}
                  >
                    Deposit
                  </Tab>
                  <Tab
                    w="100%"
                    borderRadius="10px"
                    bg={tabIndex == 1 ? colordepwith : "#F4F6FE"}
                    color={tabIndex == 1 ? "white" : "gray.600"}
                    fontWeight="extrabold"
                    fontFamily={"Kanit"}
                  >
                    Withdraw
                  </Tab>
                </TabList>
              </Flex>
              <TabPanels w="100%" mt="1rem">
                <TabPanel w="100%" p="0">
                  <Deposit bgCard = {bgCard} colortext={colortext} colorfond2={colorfond2}/>
                </TabPanel>
                <TabPanel w="100%" p="0">                  
                  <Withdraw bgCard = {bgCard} colortext={colortext} colorfond2={colorfond2}/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
