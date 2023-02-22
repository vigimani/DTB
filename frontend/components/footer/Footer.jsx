/*eslint-disable*/
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
            
    <Flex justifyContent={"flex-end"} h="100px" w="100%" >

      <Flex
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
        alignItems="flex-end"
    
        p="2rem"
      >
        &copy; {1900 + new Date().getYear()},{"  "}
        <Text as="span">
                Made by Victor G
        </Text>
        </Flex>
        </Flex>
  );
}
