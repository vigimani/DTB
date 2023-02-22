import {
  Image,
  Flex,
  Box,
  useColorModeValue,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  Th,
} from "@chakra-ui/react";
import { ABIS, ADDRESS } from "../../utils/@config";
import { useState, useEffect } from "react";
import { useContractProvider } from "@/context/ContractContext";
import { ethers } from "ethers";

import {
  numberWithSpaces,
  timestampconvert,
} from "./../../utils/utilsfunction";

export default function Mytransactions() {
  const bgCard = useColorModeValue("white", "gray.600");
  const colortext = useColorModeValue("#594B7E", "white");
  const { provider, address, plpBalance, totalsupply, navcalculated } =
    useContractProvider();

  const [transactions, setTransactions] = useState([]);
  const [invested, setInvested] = useState(0);

  useEffect(() => {
    updatetransactions();
  }, []);

  useEffect(() => {
    const contract = new ethers.Contract(
      ADDRESS.MYVAULT,
      ABIS.MYVAULT,
      provider
    );
    contract.on("depositEvent", () => {
      updatetransactions();
    });
    contract.on("withdrawEvent", () => {
      updatetransactions();
    });
    return () => {
      contract.removeAllListeners();
    };
  }, []);

  const updatetransactions = async () => {
    const MyVault = await new ethers.Contract(
      process.env.NEXT_PUBLIC_VAULTADDRESS,
      ABIS.MYVAULT,
      provider
    );
    const filter = {
      address: ADDRESS.MYVAULT,
    };
    let events = await MyVault.queryFilter(filter, 62416900);
    let transacs = [];
    let usdcspent = 0;
    for await (const event of events) {
      if (event.event == "depositEvent" && event.args[0] == address) {
        usdcspent += parseInt(event.args[3].toString());
        let tx = {
          id: event.transactionHash,
          transaction: true,
          account: event.args[0],
          when: timestampconvert(event.args[1].toString()),
          token_deposited: event.args[2],
          amount: event.args[3].toString(),
          PLPtokenissued: event.args[4].toString(),
        };
        transacs.push(tx);
      } else if (event.event == "withdrawEvent") {
        usdcspent -= parseInt(
          ((event.args[3] / 10 ** 12 / event.args[4]) * event.args[2]) /
            10 ** 12
        );
        console.log(event.args[2].toString());
        let tx = {
          id: event.transactionHash,
          transaction: false,
          account: event.args[0],
          when: timestampconvert(event.args[1].toString()),
          amount: event.args[2].toString(),
          unitprice: event.args[3] / 10 ** 12 / event.args[4],
        };
        transacs.push(tx);
      }
    }
    setTransactions(transacs);
    setInvested(usdcspent);
  };
  return (
    <>
      <Flex
        boxShadow={"md"}
        p="25px"
        borderRadius={"30px"}
        mt="2rem"
        bg={bgCard}
        fontFamily={"Kanit"}
        w="35%"
        mr="1rem"
        maxHeight={"220px"}
      >
        <Flex w="100%">
          <Flex w="100%" direction="column">
            <Flex
              color={colortext}
              fontFamily={"Kanit"}
              fontSize="lg"
              fontWeight="bold"
              mb="6px"
            >
              Wallet
            </Flex>

            <Flex w="100%">
              <Flex w="100%" direction="column">
                <Flex
                  mt="1rem"
                  justifyContent={"center"}
                  color="gray.400"
                  fontFamily={"Kanit"}
                  fontSize="md"
                  fontWeight="bold"
                >
                  Invested
                </Flex>
                <Flex
                  justifyContent={"center"}
                  color={colortext}
                  fontFamily={"Kanit"}
                  fontSize="md"
                  fontWeight="bold"
                >
                  {numberWithSpaces((invested / 10 ** 6).toFixed(2))}{" "}
                  <Image ml="4px" w="25px" src="./usdc.png" alt="Logo" />
                </Flex>
                <Flex
                  mt="1rem"
                  justifyContent={"center"}
                  color="gray.400"
                  fontFamily={"Kanit"}
                  fontSize="md"
                  fontWeight="bold"
                >
                  PLP in wallet
                </Flex>
                <Flex
                  justifyContent={"center"}
                  color={colortext}
                  fontFamily={"Kanit"}
                  fontSize="md"
                  fontWeight="bold"
                >
                  {numberWithSpaces(plpBalance.toFixed(2))}{" "}
                  <Image ml="4px" w="35px" src="./logoFun.png" alt="Logo" />
                </Flex>
              </Flex>

              <Flex w="100%">
                <Flex w="100%" direction="column">
                  <Flex
                    mt="1rem"
                    justifyContent={"center"}
                    color="gray.400"
                    fontFamily={"Kanit"}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Value
                  </Flex>
                  <Flex
                    justifyContent={"center"}
                    color={colortext}
                    fontFamily={"Kanit"}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    {numberWithSpaces(navcalculated.toFixed(2))} $
                  </Flex>
                  <Flex
                    mt="1rem"
                    justifyContent={"center"}
                    color="gray.400"
                    fontFamily={"Kanit"}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Shares
                  </Flex>{" "}
                  <Flex
                    justifyContent={"center"}
                    color={colortext}
                    fontFamily={"Kanit"}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    {(100 * plpBalance) / totalsupply}%
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        boxShadow={"md"}
        p="25px"
        borderRadius={"30px"}
        mb="1rem"
        mt="2rem"
        bg={bgCard}
        fontFamily={"Kanit"}
        w="65%"
        ml="1rem"
      >
        <Flex w="100%" direction="column">
          <Flex
            color={colortext}
            fontFamily={"Kanit"}
            fontSize="lg"
            fontWeight="bold"
            mb="6px"
          >
            My transactions
          </Flex>
          <Flex>
            <Table whiteSpace={"nowrap"}>
              <Thead>
                <Tr>
                  <Th>Time</Th>
                  <Th maxWidth={"10px"}>Status</Th>
                  <Th>Amount</Th>
                  <Th>Fund shares</Th>
                  <Th>Share price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions.map((event, index) => {
                  if (event.transaction) {
                    return (
                      <Tr key={index}>
                        <Td>{event.when}</Td>
                        <Td>deposit</Td>
                        <Td color="red">
                          {" "}
                          <Flex justifyContent={"flex-end"}>
                            -
                            {numberWithSpaces(
                              (event.amount / 10 ** 6).toFixed(2)
                            )}{" "}
                            <Image
                              ml="4px"
                              w="20px"
                              src="./usdc.png"
                              alt="Logo"
                            />{" "}
                          </Flex>
                        </Td>
                        <Td color="green">
                          <Flex justifyContent={"flex-end"}>
                            {" "}
                            +
                            {numberWithSpaces(
                              (event.PLPtokenissued / 10 ** 18).toFixed(2)
                            )}
                            {"   "}
                            <Image
                              ml="4px"
                              w="25px"
                              src="./logoFun.png"
                              alt="Logo"
                            />
                          </Flex>
                        </Td>
                        <Td>
                          {numberWithSpaces(
                            (
                              (event.amount * 10 ** 12) /
                              event.PLPtokenissued
                            ).toFixed(2)
                          )}{" "}
                          $
                        </Td>
                      </Tr>
                    );
                  } else {
                    return (
                      <Tr key={index}>
                        <Td>{event.when}</Td>
                        <Td>withdraw</Td>
                        {/* <Td color="red">{event.account.slice(0,5)}...{event.account.slice(38,42)}</Td> */}
                        <Td color="green">
                          {" "}
                          <Flex justifyContent={"flex-end"}>
                            +
                            {numberWithSpaces(
                              (
                                (event.unitprice * event.amount) /
                                10 ** 18
                              ).toFixed(0)
                            )}{" "}
                            <Image
                              ml="4px"
                              w="20px"
                              src="./usdc.png"
                              alt="Logo"
                            />{" "}
                          </Flex>
                        </Td>
                        <Td color="red">
                          <Flex justifyContent={"flex-end"}>
                            -
                            {numberWithSpaces(
                              (event.amount / 10 ** 18).toFixed(2)
                            )}{" "}
                            <Image
                              ml="4px"
                              w="25px"
                              src="./logoFun.png"
                              alt="Logo"
                            />
                          </Flex>
                        </Td>
                        <Td>
                          {numberWithSpaces(event.unitprice.toFixed(2))} $
                        </Td>
                      </Tr>
                    );
                  }
                })}
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
