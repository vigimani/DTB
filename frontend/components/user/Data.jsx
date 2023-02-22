import { Flex } from "@chakra-ui/react";
import { ADDRESS } from "../../utils/@config";
import { useState, useEffect } from "react";
import { useContractProvider } from "@/context/ContractContext";
import { FaCoins, FaBalanceScale } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { BsFillBarChartFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";

import Minicard from "./Minicard";
import { numberWithSpaces } from "@/utils/utilsfunction";

export default function Data() {
  const {
    totalsupply,
    vaultusdc,
    longsize,
    longcollateral,
    longleverage,
    longavgprice,
    shortsize,
    shortcollateral,
    shortavgprice,
    shortleverage,
    expo,
  } = useContractProvider();

  const [prices, setPrices] = useState();
  const [launched, setLaunched] = useState(false);

  async function getGmxPrices() {
    await fetch("https://api.gmx.io/prices")
      .then((res) => res.json())
      .then((res) => {
        let priceformat = parseInt(res[ADDRESS.WETH]) / 10 ** 30;
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
            <Minicard
              title="TVL"
              data={numberWithSpaces(vaultusdc.toFixed(2))}
              unity={"$"}
              icon={BsFillBarChartFill}
            />
            <Minicard
              title="Total PLP supply"
              data={numberWithSpaces(totalsupply.toFixed(0))}
              unity={"PLP"}
              icon={FaCoins}
            />
            <Minicard
              title="Current exposition"
              data="Neutral"
              icon={FiActivity}
            />
            <Minicard title="Leverage" data="1" icon={FaBalanceScale} />
            <Minicard
              title="PLP share price"
              data={
                totalsupply == 0
                  ? 0
                  : numberWithSpaces((vaultusdc / totalsupply).toFixed(2))
              }
              unity={"$"}
              icon={HiCurrencyDollar}
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
              icon={FaCoins}
            />
            <Minicard
              title="Current exposition"
              data="Long"
              icon={FiActivity}
            />
            <Minicard
              title="Leverage"
              data={longleverage.toFixed(1).toString()}
              unity={"x"}
              icon={FaBalanceScale}
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
              icon={BsFillBarChartFill}
            />
            <Minicard
              title="Total PLP supply"
              data={numberWithSpaces(totalsupply.toFixed(0))}
              unity={"PLP"}
              icon={FaCoins}
            />
            <Minicard
              title="Current exposition"
              data="Short"
              icon={FiActivity}
            />
            <Minicard
              title="Leverage"
              data={shortleverage.toFixed(1).toString()}
              unity={"x"}
              icon={FaBalanceScale}
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
              icon={HiCurrencyDollar}
            />
          </Flex>
        </>
      )}
    </>
  );
}
