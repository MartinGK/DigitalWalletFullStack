import React, { useCallback, useContext, useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { GlobalContext } from "@/contexts/globalContext";
import { getBalance } from "@/api";

const WalletBalance: React.FC = () => {
  const { selectedWallet } = useContext(GlobalContext);
  const currentCurrencyValue: number = 1;
  const [balance, setBalance] = useState<number>(0)

  useEffect(() => {
    const getAddressBalance = async (address: string) => {
      const newBalance = await getBalance(address);
      console.log(newBalance)
      setBalance(newBalance);
    };

    if (selectedWallet.address) {
      getAddressBalance(selectedWallet.address);
    }
  }, [selectedWallet]);

  const currentBalance = useCallback(() => {
    return currentCurrencyValue * balance;
  }, [currentCurrencyValue]);

  return (
    <InfoCard>
      Your balance is of <strong>{currentBalance()}</strong>
    </InfoCard>
  );
};

export default WalletBalance;
