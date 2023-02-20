import {
    Image,
    Flex,
    Text,
    Box,
    HStack,
    Stack,
    Switch,
    Button,
    Icon,
    useColorModeValue,
    useColorMode,
    IconButton,
    colorMode,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import { useRouter } from "next/router";
  import { PhoneIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
  import { FaWallet } from "react-icons/fa";
  import {MdAdminPanelSettings} from "react-icons/md"
  export default function Menu() {
    const router = useRouter();

    const isActive = (routeName) => {
        return router.pathname === routeName;
      };
    const bgCard = useColorModeValue("#F4F6FE", "gray.700");
    return (
        <>
      <Flex>
        <Box>
        <HStack minH="100px">
          <Flex justifyContent={"center"}>
            <Button
              // bg={isActive("/") ? "#9FACE6" : {bgCard}}
              bg= {bgCard}
              justifyContent="flex-start"
              alignItems="center"
              borderRadius="15px"
              _hover={{
                color: "white",
                bg: "#9face6",
              }}
              w="100%"
              _active={{
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              
            >
              <Link href="/">
                <Flex>
                  <Box
                    h="30px"
                    w="30px"
                    me="12px"
                    borderRadius="10px"
                    bgColor={isActive("/") ? "#9FACE6" : "transparent"}
                  >
                    <Icon mt="5px" as={FaWallet}/>
                  </Box>
                  <Text  textDecorationThickness={"3px"} textDecorationColor={isActive("/") ? "#9FACE6" : "transparent"} textDecorationLine="underline" my="auto" fontFamily={"Kanit"}>My investment</Text>
                </Flex>
              </Link>
            </Button>
            <Button ml="1rem"
              justifyContent="flex-start"
              alignItems="center"
              borderRadius="15px"
              bg= {bgCard}
              // bg=
              _hover={{
                color: "white",
                bg: "#9face6",
              }}
              w="90%"
            >
              <Link href="/admin">
                <Flex mr="2rem">
                  <Box
                    h="30px"
                    w="30px"
                    me="12px"
                    borderRadius="10px"
                    bgColor={isActive("/admin") ? "#9FACE6" : "transparent"}
                  >
                    <Icon mt="5px" as={MdAdminPanelSettings}/>
                  </Box>
                  <Text textDecorationThickness={"3px"} textDecorationColor={isActive("/admin") ? "#9FACE6" : "transparent"} textDecorationLine="underline" my="auto" fontFamily={"Kanit"}>Admin panel</Text>
                </Flex>
              </Link>
            </Button>
          </Flex>
        </HStack>
      </Box>
      </Flex>
      </>
    );
  };
  
