import Head from "next/head";
import {
  Text,
  Flex,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Userlayout from "./../components/user/Userlayout";
import Footer from "../components/footer/Footer";
import { useAccount} from "wagmi";
export default function Home() {
  const { address, isConnected } = useAccount();
  return (
    <>
      <Head>
        <title>PLP Decentralized Trading Bot</title>
        <meta name="description" content="Decentralized Trading Bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoFun.png" />
      </Head>

      <Flex minHeight="100vh" w="100%">
        <Flex
          w="100%"
          backgroundImage="bg_clair.png"
          backgroundSize="100%"
          justifyContent={"center"}
        >
          <Flex w="1280px" direction="column">
            <Header />

            {isConnected ? (
              <>
                <Userlayout /> 
                <Text></Text>
              </> 
            ) : (
              <Flex h="80vh" w="100%" justifyContent={"center"}>
                <Flex h="50px" mt="2rem">
                <Alert status="warning" w="auto" borderRadius="10px">
                  <AlertIcon />
                  Connect to Metamask to use the Dapp
                </Alert>
              </Flex> 
              </Flex>
            )} 
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
