import {
  Flex,
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
import { timestampconvert } from "@/utils/utilsfunction";
import { ethers } from "ethers";

//A FINALISER 
export default function Transactions() {
  const {
    provider,
  } = useContractProvider();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    updatetransactions();
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
      if (event.event == "depositEvent") {
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
    //   else if (event.event == "withdrawEvent") {
    //     let tx = {
    //         id: event.transactionHash,
    //         transaction: false,
    //         account: event.args[0],
    //         when: timestampconvert(event.args[1].toString()),
    //         amount: event.args[2].toString(),
    //         unitprice: event.args[3].toString()
    //     }
    //     transacs.push(tx)
    //   }

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
              <Th>Account</Th>
              <Th>Amount</Th>
              <Th>PLP</Th>
              <Th>Share price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((event, index) => {
              return (
                <Tr key={index}>
                    <Td color="green">{event.when}</Td>
                    <Td color="green">{event.account.slice(0,5)}...{event.account.slice(38,42)}</Td>
                    <Td color="green" >{(event.amount)} USDC</Td>
                    <Td color="green">{event.PLPtokenissued} PLP</Td>
                    <Td color="green">{(event.amount/event.PLPtokenissued).toFixed(4)} $</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </>
  );
}
