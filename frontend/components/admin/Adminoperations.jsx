import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Heading,
  List,
  ListItem,
  useColorModeValue,
  } from "@chakra-ui/react";

  
  export default function Adminoperations({exeincreasepos, exedecreasepos , updatenetassetvalue, liquidateshortpos , liquidatelongpos , openpos, setExposition, expo, netassetvalue}) {
      const bgCard = useColorModeValue("white", "gray.600");
      const colortext = useColorModeValue("#594B7E", "white");
    return (
      <>
              <Flex w="33%" ml="1rem" direction="column">
                <Heading color={colortext}>Admin</Heading>
                <Flex
                  boxShadow={"0px 0px 10px"}
                  flexDirection={"column"}
                  mt="1rem"
                  borderRadius="10px"
                  bg={bgCard}
                  color={colortext}
                  p="15px"
                >
                  <Text fontWeight={"bold"} fontSize={"2xl"}>
                    Exposition :{" "}
                    {expo == 0 ? "Neutral" : expo == 1 ? "Long" : "Short"}
                  </Text>
  
                    <Stack mt="1rem" spacing={5} direction="row">
                      <Radio
                        colorScheme="red"
                        value="2"
                        isChecked={expo == 2}
                        onChange={(e) => setExposition(e.target.value)}
                      >
                        Short
                      </Radio>
                      <Radio
                        colorScheme="blue"
                        value="0"
                        onChange={(e) => setExposition(e.target.value)}
                        isChecked={expo ==0}
                      >
                        Neutral
                      </Radio>
                      <Radio
                        colorScheme="green"
                        value="1"
                        onChange={(e) => setExposition(e.target.value)}
                        isChecked={expo ==1}
                      >
                        Long
                      </Radio>
                    </Stack>
                </Flex>
                <Flex
                  boxShadow={"0px 0px 10px"}
                  flexDirection={"column"}
                  mt="1rem"
                  borderRadius="10px"
                  bg={bgCard}
                  color={colortext}
                  p="15px"
                >
                  <Text fontWeight={"bold"} fontSize={"2xl"}>
                    Positions | Nav : {netassetvalue}
                  </Text>
                  <Button mt="5px" onClick={() => openpos()}>
                    Open position
                  </Button>
                  <Button mt="5px" onClick={() => liquidatelongpos()}>
                    Liquidate Long position
                  </Button>
                  <Button mt="5px" onClick={() => liquidateshortpos()}>
                    Liquidate Short position
                  </Button>
                  <Button mt="5px" onClick={() => updatenetassetvalue()}>
                    Update NAV
                  </Button>
                  <Button mt="5px" onClick={() => exeincreasepos()}>
                    Execute Increase Positions
                  </Button>
                  <Button mt="5px" onClick={() => exedecreasepos()}>
                    Execute Decrease Positions
                  </Button>
                </Flex>
              </Flex>
      </>
    );
  }
