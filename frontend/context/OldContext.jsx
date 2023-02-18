import React, { useEffect, useContext, useState } from "react";
import { ethers } from "ethers";
import { abi } from "./helper";
import { useAccount, useBalance, useProvider, useSigner } from "wagmi";
import { useToast } from "@chakra-ui/react";

const ContractContext = React.createContext(null)
export function useContractProvider() {
    const context = useContext(ContractContext)
    if (!context) {
        throw new Error('useContractProvider must be used within a ContractProvider')
    }
    return context
}

export const ContractProvider = ({ children }) => {
    const contractAddress = process.env.NEXT_PUBLIC_SCADDRESS
    const { address, isConnected } = useAccount()
    const provider = useProvider()
    const { data: signer } = useSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    const contractRead = new ethers.Contract(contractAddress, abi, provider)

    const toast = useToast()
    const [amountInVault, setAmountInVault] = useState(0)
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if(isConnected) {
          updateBalance();
          updatetransactions();
        }
      }, [address, isConnected])
      
    const updateBalance = async() => {
        let a = await contract.connect(address).getBalanceOfUser()
        let balance = parseFloat(parseFloat(a.toString())/Math.pow(10,18)).toFixed()
        setAmountInVault(balance)
    }
    // updateBalance()
    const deposit = async(amount) => {
        let amountETH = ethers.utils.parseEther(amount)
        let transaction = await contract.deposit({value : amountETH})
        await transaction.wait(1)
        await updateBalance()
    }
  
    const withdraw = async(amount) => {
        let amountETH = ethers.utils.parseEther(amount)
        let transaction = await contract.withdraw(amountETH)
        await transaction.wait(1)
        await updateBalance()
    }
  
    const getEvents = async () => {
        const filter = { address: contractAddress, fromBlock:  0 };
        let events = await contract.queryFilter(filter, 0);
        return events;
      };

    const updatetransactions = async () => {
        let events = await getEvents()
        let allTheEvents = [];
        events.forEach((event) => {
            console.log(event)
            // if (event.event === "VoterRegistered") {
            //   let thisVoter = {
            //     id: event.transactionHash,
            //     address: event.args.voterAddress,
            //   };
            //   voterRegisteredEvents.push(thisVoter);
            // }
          });
        // for await (const event of events) {
        //   const txnReceipt = await event.getTransactionReceipt();
        //   let eventLog = txnReceipt.logs[0]; // could be any index
        //   let log = contract.interface.parseLog(eventLog); // Use the contracts interface
        //   allTheEvents.push(log);
        // }
        // setTransactions(allTheEvents);
      };
    
    return (
        <ContractContext.Provider value={{
            contractAddress,
            address,
            isConnected,
            deposit, 
            withdraw,
            amountInVault,
            transactions
        }}>
            {children}
        </ContractContext.Provider>
    )
}

// export default ContractContext