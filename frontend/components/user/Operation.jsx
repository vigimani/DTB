import {
  Flex,
  Box,
  Text,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
export default function Operation() {
  const [tabIndex, setTabIndex] = useState(0);
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
              bg="white"
              borderRadius={"30px"}
            >
          <Flex w="100%" direction="column">
            <Flex w="100%">
            <Text color="#594B7E" fontFamily={"Kanit"} fontSize="lg" fontWeight="bold" mb="6px">
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
                  <Deposit/>
                </TabPanel>
                <TabPanel w="100%" p="0">                  
                  <Withdraw/>
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
