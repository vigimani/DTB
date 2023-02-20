import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {ADDRESS} from "./../../utils/@config"
import { GiTwoCoins } from "react-icons/gi";
import {
  CheckCircleIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

export default function Initialisation({removeToken, setRemovetoken, tokenaccept, addToken, setNewtoken, controllerGMX, getcontrollerGMX, gmxcontroller, newtoken, removetoken, isTokenaccepted}) {
    const bgCard = useColorModeValue("white", "gray.600");
    const colortext = useColorModeValue("#594B7E", "white");
  return (
    <>
            <Flex w="33%" ml="1rem" direction="column">
              <Heading color={colortext}>Initialisation</Heading>
              <Flex
                boxShadow={"0px 0px 10px"}
                flexDirection={"column"}
                p="10px"
                mt="1rem"
                borderRadius="10px"
                bg={bgCard}
                color={colortext}
              >
                <Text fontWeight={"bold"} fontSize={"2xl"}>
                  GMX Controller
                </Text>
                <Flex flexDirection="raw">
                  <Flex mt="1rem" alignItems={"center"}>
                    <Button onClick={() => controllerGMX()}>
                      Set GMX Controller
                    </Button>
                    {gmxcontroller !==
                    "0x0000000000000000000000000000000000000000" ? (
                      <Icon
                        mr="1rem"
                        ml="1rem"
                        as={CheckCircleIcon}
                        color="green.500"
                      />
                    ) : (
                      <Icon
                        mr="1rem"
                        ml="1rem"
                        as={SettingsIcon}
                        color="red.500"
                      />
                    )}
                  </Flex>
                </Flex>
                <Flex mt="1rem" flexDirection={"column"}>
                  <Button onClick={() => getcontrollerGMX()}>
                    Get controller address
                  </Button>
                  <Flex mt="1rem">{gmxcontroller}</Flex>
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
              >
                <Text fontWeight={"bold"} fontSize={"2xl"}>
                  Token handling

                </Text>
                {ADDRESS.USDC}
                <Flex alignItems={"center"}>
                  <InputGroup>
                    <InputLeftAddon
                      mt="1rem"
                      children={<Icon as={GiTwoCoins} />}
                    />
                    <Input
                      mt="1rem"
                      placeholder="token address -> 0x..."
                      value={newtoken}
                      onChange={(e) => setNewtoken(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <Button mt="1rem" onClick={() => addToken(newtoken)}>
                    Add token
                  </Button>
                </Flex>
                <Flex alignItems={"center"}>
                  <InputGroup>
                    <InputLeftAddon
                      mt="1rem"
                      children={<Icon as={GiTwoCoins} />}
                    />
                    <Input
                      mt="1rem"
                      placeholder="token address -> 0x..."
                      value={removetoken}
                      onChange={(e) => setRemovetoken(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <Button mt="1rem" onClick={() => removeToken(removetoken)}>
                    Remove token
                  </Button>
                </Flex>
                <Flex alignItems={"center"}>
                  <InputGroup>
                    <InputLeftAddon
                      mt="1rem"
                      children={<Icon as={GiTwoCoins} />}
                      bg={isTokenaccepted ? "green.200" : "red.100"}
                    />
                    <Input
                      mt="1rem"
                      placeholder="token address -> 0x..."
                      onChange={(e) => tokenaccept(e.target.value)}
                    ></Input>
                  </InputGroup>

                  {/* <Button mt="1rem" onClick={()=>isAccepted(tokenTested)}>Is Accepted ?</Button> */}
                </Flex>
                {/* <List mt="1rem">
                  {TokenList.map((coin, index) => {
                    return (
                      <ListItem key={index}>
                        {coin.symbol} : {coin.address}
                      </ListItem>
                    );
                  })}
                </List> */}
              </Flex>
            </Flex>
    </>
  );
}
