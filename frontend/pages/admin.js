import Head from "next/head";
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
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useContractProvider } from "@/context/ContractContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Main } from "next/document";
import TokenList from "./../assets/token-list-arbitrum.json";
import abiVault from "./../assets/abi-MyVault.json";
import { ethers } from "ethers";
import { GiTwoCoins } from "react-icons/gi";
import {
  CheckCircleIcon,
  SettingsIcon,
  NotAllowedIcon,
} from "@chakra-ui/icons";
import { ABIS, ADDRESS } from "./../context/@config";
import { erc20ABI } from "wagmi";

export default function Admin() {
  const {
    isConnected,
    isOwner,
    vaultAddress,
    controllerAddres,
    signer,
    provider,
  } = useContractProvider();
  const [isTokenaccepted, setIstokenaccepted] = useState(false);
  const [gmxcontroller, setGmxcontroller] = useState();
  const [expo, setExpo] = useState(0);
  const [netassetvalue, setNetassetvalue] = useState();

  const [datas, setDatas] = useState();

  const [newtoken, setNewtoken] = useState();
  const [removetoken, setRemovetoken] = useState();

  useEffect(() => {
    if (isConnected && isOwner) {
      getcontrollerGMX();
      getData();
    }
  }, []);

  const bgCard = useColorModeValue("white", "gray.600");
  const colortext = useColorModeValue("#594B7E", "white");

  const controllerGMX = async () => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    console.log(contract);
    let tx = await contract.setGMX_controller(controllerAddres, {
      gasLimit: 1000000,
    });
    console.log(tx);
    await tx.wait(1);
  };
  const getcontrollerGMX = async () => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    let tx = await contract.getGMX_controller({ gasLimit: 1000000 });
    setGmxcontroller(tx);
  };
  const addToken = async (_addr) => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    let tx = await contract.acceptToken(_addr);
    await tx.wait(1);
    setNewtoken("");
  };
  const removeToken = async (_addr) => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    let tx = await contract.removeToken(_addr);
    await tx.wait(1);
    setRemovetoken("");
  };
  const tokenaccept = async (_addr) => {
    try {
      const contract = new ethers.Contract(vaultAddress, abiVault, signer);
      let tx = await contract.isAccepted(_addr);
      if (tx) {
        setIstokenaccepted(true);
      } else {
        setIstokenaccepted(false);
      }
    } catch {
      setIstokenaccepted(false);
    }
  };
  const setExposition = async (value) => {
    try {
      const contract = new ethers.Contract(vaultAddress, abiVault, signer);
      let tx = await contract.setExposition(value);
      await tx.wait(1);
      setExpo(value);
    } catch {}
  };
  const openpos = async () => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    let tx = await contract.openPosition();
    await tx.wait(1);
  };
  const liquidatepos = async () => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    let tx = await contract.liquidatePositions();
    await tx.wait(1);
  };
  const updatenetassetvalue = async () => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    let tx = await contract.updateNetAssetValue();
    await tx.wait(1);
    let tx2 = await contract.getNetAssetValue();
    getnav();
  };
  const getnav = async () => {
    const contract = new ethers.Contract(vaultAddress, abiVault, signer);
    let tx2 = await contract.getNetAssetValue();
    setNetassetvalue(tx2.toString());
  };

  const exeincreasepos = async () => {
    const GMX_POSITION_ROUTER = new ethers.Contract(
      ADDRESS.GMX_POSITION_ROUTER,
      ABIS.GMX_POSITION_ROUTER,
      signer
    );
    await GMX_POSITION_ROUTER.executeIncreasePositions(
      parseInt(await waitingPositionsLength(true)),
      GMX_controller.address
    );
  };
  const exedecreasepos = async () => {
    await GMX_POSITION_ROUTER.executeDecreasePositions(
      parseInt(await waitingPositionsLength(false)),
      GMX_controller.address
    );
  };
  const waitingPositionsLength = async (isIncrease) => {
    const GMX_POSITION_ROUTER = new ethers.Contract(
      ADDRESS.GMX_POSITION_ROUTER,
      ABIS.GMX_POSITION_ROUTER,
      signer
    );
    let a = isIncrease ? 1 : 3;
    return (
      await ("getRequestQueueLengths",
      await GMX_POSITION_ROUTER.getRequestQueueLengths())
    )[a].toString();
  };
  const waitingPositionsStart = async (isIncrease) => {
    const GMX_POSITION_ROUTER = new ethers.Contract(
      ADDRESS.GMX_POSITION_ROUTER,
      ABIS.GMX_POSITION_ROUTER,
      signer
    );
    let a = isIncrease ? 0 : 2;
    return (
      await ("getRequestQueueLengths",
      await GMX_POSITION_ROUTER.getRequestQueueLengths())
    )[a].toString();
  };

  const getPositions = async (_addr, _isLong) => {
    let collateralToken = _isLong ? ADDRESS.WETH : ADDRESS.USDC;
    const GMX_READER = new ethers.Contract(
      ADDRESS.GMX_READER,
      ABIS.GMX_READER,
      provider
    );
    let response = await GMX_READER.getPositions(
      ADDRESS.GMX_VAULT,
      _addr,
      [collateralToken],
      ["0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"],
      [_isLong]
    );
    return response;
  };

  const getData = async () => {
    let responseLong = await getPositions(
      process.env.NEXT_PUBLIC_GMXCONTROLADDRESS,
      true
    );
    let responseShort = await getPositions(
      process.env.NEXT_PUBLIC_GMXCONTROLADDRESS,
      false
    );
    const VAULTCONTRACT = new ethers.Contract(vaultAddress, abiVault, signer);
    let totalSupply = parseInt((await VAULTCONTRACT.totalSupply()).toString());
    const USDC = new ethers.Contract(ADDRESS.USDC, erc20ABI, signer);
    let balanceUSDC = await USDC.balanceOf(vaultAddress);

    let NAV =
      parseInt(responseLong[1].toString()) +
      parseInt(responseShort[1].toString()) +
      parseInt(responseShort[8].toString()) +
      parseInt(responseLong[8].toString()) +
      parseInt(balanceUSDC.toString());
    let shareprice = totalSupply == 0 ? 0 : NAV / totalSupply;

    let data = JSON.stringify({
      vault: {
        supply: totalSupply,
        share_price: shareprice,
        nav: NAV,
      },
      posLong: {
        size: parseInt(responseLong[0].toString()),
        collateral: parseInt(responseLong[1].toString()),
        avg_price: parseInt(responseLong[2].toString()),
        delta: parseInt(responseLong[8].toString()),
        leverage:
          parseInt(responseLong[0].toString()) /
          parseInt(responseLong[1].toString()),
      },
      posShort: {
        size: parseInt(responseShort[0].toString()),
        collateral: parseInt(responseShort[1].toString()),
        avg_price: parseInt(responseShort[2].toString()),
        delta: parseInt(responseShort[8].toString()),
        leverage:
          parseInt(responseShort[0].toString()) /
          parseInt(responseShort[1].toString()),
      },
    });
    setDatas(data);
  };

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
          <Header />

          {/* <Flex style={{min-height:calc("100vh-1380px")}} w="100%" bg="red" mt="2rem"> */}
          <Flex h="100%" justifyContent={"center"}>
            <Flex w="31%" ml="1rem" direction="column">
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
                <List mt="1rem">
                  {TokenList.map((coin, index) => {
                    return (
                      <ListItem key={index}>
                        {coin.symbol} : {coin.address}
                      </ListItem>
                    );
                  })}
                </List>
              </Flex>
            </Flex>
            <Flex w="31%" ml="1rem" direction="column">
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
                <RadioGroup mt="1rem" defaultValue={expo}>
                  <Stack spacing={5} direction="row">
                    <Radio
                      colorScheme="red"
                      value="2"
                      onChange={(e) => setExposition(e.target.value)}
                    >
                      Short
                    </Radio>
                    <Radio
                      colorScheme="blue"
                      value="0"
                      onChange={(e) => setExposition(e.target.value)}
                    >
                      Neutral
                    </Radio>
                    <Radio
                      colorScheme="green"
                      value="1"
                      onChange={(e) => setExposition(e.target.value)}
                    >
                      Long
                    </Radio>
                  </Stack>
                </RadioGroup>
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
                <Button mt="5px" onClick={() => liquidatepos()}>
                  Liquidate position
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
            <Flex w="31%" ml="1rem" direction="column">
              <Heading color={colortext}>Reader</Heading>
              <Flex
                boxShadow={"0px 0px 10px"}
                flexDirection={"column"}
                p="10px"
                mt="1rem"
                borderRadius="10px"
                bg={bgCard}
                color={colortext}
              >
                <Flex mt="1rem" flexDirection={"column"}>
                  {datas !== undefined ? (
                    <>
                      <Text>
                        PLP supply : {JSON.parse(datas)["vault"]["supply"]}
                      </Text>
                      <Text>
                        Share price :{" "}
                        {JSON.parse(datas)["vault"]["share_price"]}
                      </Text>
                      <Text>NAV : {JSON.parse(datas)["vault"]["nav"]}</Text>
                      <Flex mt="1rem">
                        <Flex w="50%" flexDirection={"column"}>
                          <Flex fontWeight={"bold"}>LONG</Flex>
                          <Flex>Size : {JSON.parse(datas)["posLong"]["size"]}</Flex>
                          <Flex>Collateral : {JSON.parse(datas)["posLong"]["collateral"]}</Flex>
                          <Flex>Delta : {JSON.parse(datas)["posLong"]["delta"]}</Flex>
                          <Flex>Leverage : {JSON.parse(datas)["posLong"]["leverage"]}</Flex>
                        </Flex>

                        <Flex
                          w="3px"
                          h="100%"
                          bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
                          mr="5px"
                        ></Flex>
                        <Flex w="50%" flexDirection={"column"}>
                        <Flex fontWeight={"bold"}>SHORT</Flex>
                          <Flex>Size : {JSON.parse(datas)["posShort"]["size"]}</Flex>
                          <Flex>Collateral : {JSON.parse(datas)["posShort"]["collateral"]}</Flex>
                          <Flex>Delta : {JSON.parse(datas)["posShort"]["delta"]}</Flex>
                          <Flex>Leverage : {JSON.parse(datas)["posShort"]["leverage"]}</Flex>
                        </Flex>
                      </Flex>
                    </>
                  ) : (
                    <></>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
