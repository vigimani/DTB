import Head from "next/head";
import {
  Text,
  Flex,
  Box,
  useBreakpointValue,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContractProvider } from "@/context/ContractContext";
import Header from "@/components/header/Header";
import Mainpanel from "@/components/mainPanel/Mainpanel";
import { Main } from "next/document";
export default function Home() {

  const { isOwner } = useContractProvider();

  return (
    <>
      <Head>
        <title>PLP</title>
        <meta name="description" content="Decentralized Trading Bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        minHeight="100vh"
        w="100%"
        justifyContent={"center"}
        backgroundImage="bg_clair.png"
        backgroundSize="cover"
      >
        <Flex w="1280px" direction="column">

          {/* Header */}
          <Header/>

          {/* CentralPanel */}
          <Mainpanel />

          <Flex h="100px" w="100%" bg="blue">
            Footer
          </Flex>


        </Flex>
      </Flex>
    </>
  );
}
