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
  import { ABIS, ADDRESS } from "../../../utils/@config";
  import { useState, useEffect } from "react";
  import { useContractProvider } from "@/context/ContractContext";
  import { erc20ABI } from "wagmi";
  import { ethers } from "ethers";
  
  export default function Navevent() {
    const {
      isConnected,
      isOwner,
      vaultAddress,
      controllerAddres,
      signer,
      provider,
    } = useContractProvider();
    const [events, setEvents] = useState([]);
    useEffect(() => {
      updatetransactions();
    }, []);
  
    const timestampconvert = (date) => {
      let milliseconds = 1000*date
      let dateObject = new Date(milliseconds)
      return dateObject.toLocaleString()
    }
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
        if (event.event == "navEvent") {
          let tx = {
              id: event.transactionHash,
              exposition: event.args[1],
              when: timestampconvert(event.args[0].toString()),
              oldNav: event.args[2].toString(),
              NAV: event.args[3].toString(),
              usdcNAV: event.args[4].toString(),
              longNAV: event.args[5].toString(),
              shortNAV : event.args[6].toString(),
              totalsupply : event.args[7].toString(), 
          }
          transacs.push(tx)
        }
      }
      setEvents(transacs);
    };
    return (
      <>
  
        <Flex>
          <Table>
            <Thead>
              <Tr>
                <Th>Time</Th>
                <Th>Exposition</Th>
                <Th>Old Nav</Th>
                <Th>Nav</Th>
                <Th>o/w USDC</Th>
                <Th>o/w Long</Th>
                <Th>o/w Short</Th>
                <Th>Total supply</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.map((event, index) => {
                return (
                  <Tr key={index}>
                      <Td color="green">{event.when}</Td>
                      <Td color="green">{event.exposition}</Td>
                      <Td color="green" >{(event.oldNav/10**6).toFixed(2)} $</Td>
                      <Td color="green">{(event.NAV/10**6).toFixed(2)} $</Td>
                      <Td color="green">{(event.usdcNAV/10**6).toFixed(2)} $</Td>
                      <Td color="green">{(event.longNAV/10**6).toFixed(2)} $</Td>
                      <Td color="green">{(event.shortNAV/10**6).toFixed(2)} $</Td>
                      <Td color="green">{(event.totalsupply)/(10**6)} PLP</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Flex>
      </>
    );
  }
  