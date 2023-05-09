import { Wallet, ICurrency } from "@/interfaces";
import { createContext, useState, ReactNode, useEffect } from "react";

interface ContextType {
  wallets: Wallet[];
  selectedWallet: Wallet;
  currencies: ICurrency[];
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  setCurrencies: (currency: ICurrency[]) => void;
  addWallet: (wallet: Wallet) => void;
  setWallets: (wallets: Wallet[]) => void;
  setSelectedWallet: (wallets: Wallet) => void;
}

export const GlobalContext = createContext<ContextType>({
  wallets: [],
  selectedWallet: {
    address: "",
    id: "",
    isFavorite: false,
  },
  currencies: [],
  selectedCurrency: "",
  setSelectedCurrency: () => {},
  setCurrencies: () => {},
  addWallet: () => {},
  setWallets: () => {},
  setSelectedWallet: () => {},
});

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [selectedWallet, setSelectedWallet] = useState<Wallet>({
    address: "",
    id: "",
    isFavorite: false,
  });

  const addWallet = (wallet: Wallet) => {
    setWallets([...wallets, wallet]);
  };

  return (
    <GlobalContext.Provider
      value={{
        wallets,
        currencies,
        selectedWallet,
        selectedCurrency,
        setSelectedCurrency,
        setCurrencies,
        addWallet,
        setWallets,
        setSelectedWallet,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
