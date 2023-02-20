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
  Icon,
} from "@chakra-ui/react";
import { ABIS, ADDRESS } from "../../utils/@config";
import { useState, useEffect } from "react";
import { useContractProvider } from "@/context/ContractContext";
import { ethers } from "ethers";
import { timestampconvert } from "@/utils/utilsfunction";
import { FaWallet,FaCoins, FaBalanceScale } from "react-icons/fa";
import {HiCurrencyDollar} from "react-icons/hi"
import {BsFillBarChartFill, BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs"
import {FiActivity} from "react-icons/fi"

import Minicard from "./Minicard";
import { numberWithSpaces } from "@/utils/utilsfunction";

export default function Data() {
  const {
    totalsupply,
    shareprice,
    navcalculated,
    vaultusdc,
    longsize,
    longcollateral,
    longdelta,
    longleverage,
    longavgprice,
    increasePosition,
    decreasePosition,
    shortsize,
    shortcollateral,
    shortavgprice,
    shortdelta,
    shortleverage,
    expo,
  } = useContractProvider();

  const [prices, setPrices] = useState();
  const [launched, setLaunched] = useState(false);

  async function getGmxPrices() {
    await fetch("https://api.gmx.io/prices")
      .then((res) => res.json())
      .then((res) => {
        // let price = (res[ADDRESS.WETH])
        let priceformat = parseInt(res[ADDRESS.WETH]) / 10 ** 30;
        console.log(priceformat);
        setPrices(priceformat);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setTimeout(getGmxPrices, 100000);
      });
  }

  useEffect(() => {
    if (!launched) {
      try {
        getGmxPrices();
        setLaunched(true);
      } catch (e) {
        console.log("error");
      }
    }
  }, []);

  return (
    <>
      {expo == 0 ? (
        <>
          <Flex direction="raw" justifyContent={"space-between"}>
            <Minicard title="TVL" data={vaultusdc} unity={"$"}/>
            <Minicard
              title="Total PLP supply"
              data={numberWithSpaces(totalsupply.toFixed(0))}
              unity={"PLP"}
            />
            <Minicard title="Current exposition" data="Neutral" />
            <Minicard title="Leverage" data="0" />
            <Minicard
              title="PLP share price"
              data={totalsupply == 0 ? 0 : vaultusdc / totalsupply}
              unity={"$"}
            />
          </Flex>
        </>
      ) : expo == 1 ? (
        <>
          <Flex direction="raw" justifyContent={"space-between"}>
            <Minicard
              title="TVL"
              data={numberWithSpaces(
                (
                  longcollateral +
                  (longsize * (longavgprice - prices)) / prices
                ).toFixed(2)
              )}
              unity={"$"}
              icon={BsFillBarChartFill}
            />
            <Minicard
              title="Total PLP supply"
              data={numberWithSpaces(totalsupply.toFixed(0))}
              unity={"PLP"}
              icon = {FaCoins}
            />
            <Minicard title="Current exposition" data="Long"  icon={FiActivity}/>
            <Minicard
              title="Leverage"
              data={longleverage.toFixed(1).toString()}
              unity={"x"}
                icon = {FaBalanceScale}
            />
            <Minicard
              title="PLP share price"
              data={numberWithSpaces(
                (
                  (longcollateral +
                    (longsize * (longavgprice - prices)) / prices) /
                  totalsupply
                ).toFixed(2)
              )}
              unity={"$"}
              icon={HiCurrencyDollar}
            />
          </Flex>
        </>
      ) : (
        <>
          <Flex direction="raw" justifyContent={"space-between"}>
            <Minicard
              title="TVL"
              data={numberWithSpaces(
                (
                  shortcollateral +
                  (shortsize * (prices - shortavgprice)) / prices
                ).toFixed(2)
              )}
              unity={"$"}
            />
            <Minicard
              title="Total PLP supply"
              data={numberWithSpaces(totalsupply.toFixed(0))}
              unity={"PLP"}
            />
            <Minicard title="Current exposition" data="Short" />
            <Minicard
              title="Leverage"
              data={shortleverage.toFixed(1).toString()}
              unity={"x"}
            />
            <Minicard
              title="PLP share price"
              data={numberWithSpaces(
                (
                  (shortcollateral +
                    (shortsize * (prices - shortavgprice)) / prices) /
                  totalsupply
                ).toFixed(2)
              )}
              unity={"$"}
            />
          </Flex>
        </>
      )}
    </>
  );
}
