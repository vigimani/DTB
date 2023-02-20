import {
    Image,
    Flex,
    Text,
    Box,
    HStack,
    Stack,
    Switch,
    Button,
    useColorModeValue,
    useColorMode,
    IconButton,
    colorMode,
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
  import { timestampconvert } from "@/utils/utilsfunction";

  export default function Mytransactions() {
    const {
      isConnected,
      isOwner,
      vaultAddress,
      controllerAddres,
      signer,
      provider,
      address,
    } = useContractProvider();
    const [transactions, setTransactions] = useState([]);
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
      for await (const event of events) {
        if (event.event == "depositEvent" && event.args[0]== address) {
          let tx = {
              id: event.transactionHash,
              transaction: true,
              account: event.args[0],
              when: timestampconvert(event.args[1].toString()),
              token_deposited: event.args[2],
              amount: event.args[3].toString(),
              PLPtokenissued: event.args[4].toString()
          }
          transacs.push(tx)
        } 
        else if (event.event == "withdrawEvent") {
          let tx = {
              id: event.transactionHash,
              transaction: false,
              account: event.args[0],
              when: timestampconvert(event.args[1].toString()),
              amount: event.args[2].toString(),
              unitprice: event.args[3].toString()
          }
          transacs.push(tx)
        }
  
      }
      setTransactions(transacs);
    };
    return (
      <>
  
        <Flex>
          <Table>
            <Thead>
              <Tr>
                <Th>Time</Th>
                {/* <Th>Account</Th> */}
                <Th>Amount</Th>
                <Th>PLP</Th>
                <Th>Share price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((event, index) => {
                if (event.transaction) {
                return (
                  <Tr key={index}>
                      <Td color="green">{event.when}</Td>
                      {/* <Td color="green">{event.account.slice(0,5)}...{event.account.slice(38,42)}</Td> */}
                      <Td color="red" >-{(event.amount)/10**6} USDC</Td>
                      <Td color="green">+{event.PLPtokenissued/10**18} PLP</Td>
                      <Td color="green">{(event.amount*10**12/event.PLPtokenissued).toFixed(4)} $</Td>
                  </Tr>
                );} else {
                  return (
                    <Tr key={index}>
                        <Td color="red">{event.when}</Td>
                        {/* <Td color="red">{event.account.slice(0,5)}...{event.account.slice(38,42)}</Td> */}
                        <Td color="green" >{event.unitprice*(event.amount)/10**18} USDC</Td>
                        <Td color="red">-{event.amount/10**18} PLP</Td>
                        <Td color="red">{(event.unitprice)} $</Td>
                    </Tr>
                  )} 
              })}
            </Tbody>
          </Table>
          
        </Flex>
      </>
    );
  }
  