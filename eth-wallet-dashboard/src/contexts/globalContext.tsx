import { Wallet } from "@/interfaces";
import { createContext, useState, ReactNode } from "react";

interface ContextType {
  wallets: Wallet[];
  exchangeValues: Record<string, number>;
  selectedWallet: Wallet;
  addWallet: (wallet: Wallet) => void;
  setWallets: (wallets: Wallet[]) => void;
  setSelectedWallet: (wallets: Wallet) => void;
}

export const GlobalContext = createContext<ContextType>({
  wallets: [],
  exchangeValues: {
    USD: 1,
    EUR: 2,
  },
  selectedWallet: {
    address: "",
    id: "",
    isFavorite: false,
  },
  addWallet: () => {},
  setWallets: () => {},
  setSelectedWallet: () => {},
});

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<Wallet>({
    address: "",
    id: "",
    isFavorite: false,
  });
  const [exchangeValues, setExchangeValues] = useState({
    USD: 1,
    EUR: 2,
  });

  const addWallet = (wallet: Wallet) => {
    setWallets([...wallets, wallet]);
  };

  return (
    <GlobalContext.Provider
      value={{
        wallets,
        exchangeValues,
        addWallet,
        setWallets,
        selectedWallet,
        setSelectedWallet,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
