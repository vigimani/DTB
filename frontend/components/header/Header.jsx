import { IconButton, Flex, useColorMode, Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@fontsource/kanit";
import Menu from "./Menu";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      h="90px"
      w="100%"
      alignItems={"center"}
      justifyContent="space-between"
    >

      <Flex>
        <Flex w="65px" fontSize={"2xl"}>
          <Image objectFit="cover" src="./logoFun.png" alt="Logo" />
        </Flex>
        <Flex direction="column">
          <Flex
            mb="-3.5"
            ml="1rem"
            letterSpacing={"0px"}
            fontWeight={"1000"}
            fontFamily={"Kanit"}
            color="#594B7E"
            fontSize={"2xl"}
          >
            POLYPLUS
          </Flex>
          <Flex
            alignContent={"flex-start"}
            ml="1rem"
            letterSpacing={"0px"}
            fontWeight={"900"}
            fontFamily={"Kanit"}
            color="#9face6"
            fontSize={"xl"}
          >
            Decentralized Trading Bot
          </Flex>
        </Flex>
      </Flex>
      <Menu />
      <Flex>

          <IconButton
            aria-label="Toggle Mode"
            onClick={toggleColorMode}
            mr="2rem"
            bg="#9face6"
            color="white"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
          <ConnectButton />

      </Flex>
    </Flex>
  );
};

export default Header;
