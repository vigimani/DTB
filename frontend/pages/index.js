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
import Userlayout from "./../components/user/Userlayout";
import { Main } from "next/document";
import Footer from "../components/footer/Footer";
export default function Home() {

  const { isOwner, isConnected } = useContractProvider();

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
        backgroundSize="100%"
        backgroundRepeat={"no-repeat"}
        bg ="#F4F6FE"
      >
        <Flex>
        <Flex w="1280px" direction="column">
          <Header/>
          <Userlayout />
          <Footer/>
        </Flex>
        </Flex>
      </Flex>
    </>
  );
}
