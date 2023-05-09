import React, { useCallback, useContext, useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { GlobalContext } from "@/contexts/globalContext";
import { getBalance } from "@/api";

const WalletBalance: React.FC = () => {
  const { selectedWallet, selectedCurrency, currencies } =
    useContext(GlobalContext);
  const [currentCurrencyValue, setCurrentCurrencyValue] = useState<number>(1);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const getAddressBalance = async (address: string) => {
      const newBalance = await getBalance(address);
      setBalance(parseFloat(newBalance));
    };

    if (selectedWallet.address) {
      getAddressBalance(selectedWallet.address);
    }
  }, [selectedWallet]);
  
  useEffect(() => {
    const currency = currencies.find(
      (cur) => cur.currency === selectedCurrency
    );
    setCurrentCurrencyValue(currency ? parseFloat(currency.rate) : 0);
  }, [currencies, selectedCurrency]);

  useEffect(() => {
    const getCurrencyValue = () => {
      const currency = currencies.find(
        (cur) => cur.currency === selectedCurrency
      );
      if (currency) {
        setCurrentCurrencyValue(parseFloat(currency.rate));
      }
    };

    getCurrencyValue();
  }, [currencies]);

  const currentBalance = useCallback(() => {
    return currentCurrencyValue * balance;
  }, [currentCurrencyValue, balance]);

  return (
    <InfoCard>
      Your balance is of <strong>{currentBalance()}</strong> {selectedCurrency}
    </InfoCard>
  );
};

export default WalletBalance;
