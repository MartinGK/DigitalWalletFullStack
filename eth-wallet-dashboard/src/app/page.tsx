"use client";
import WalletList from "@/components/WalletList";
import AddWalletForm from "@/components/AddWalletForm";
import ExchangeRates from "@/components/ExchangeRates";
import api from "../api";
import InfoCard from "@/components/InfoCard";
import SelectCurrency from "@/components/SelectCurrency";
import CurrencyValue from "@/components/CurrencyValue";
import WalletSelected from "@/components/WalletSelected";
import { Divider } from "@mui/material";
import OldWalletAdvice from "@/components/OldWalletAdvice";
import WalletBalance from "@/components/WalletBalance";
import { Wallet } from "@/interfaces";
import { GlobalContextProvider } from "@/contexts/globalContext";

const MainPage: React.FC = () => {
  return (
    <GlobalContextProvider>
      <div className="bg-white text-black h-screen w-screen flex flex-col items-center py-10">
        <div className="w-full flex">
          <div className="w-full h-0 border-black border-t-2 mt-5 mr-5" />
          <h1 className="text-3xl whitespace-nowrap">Digital Wallet</h1>
          <div className="w-full h-0 border-black border-t-2 mt-5 ml-5" />
        </div>
        <div className="flex flex-col">
          <div className="grid w-full grid-cols-2 gap-4 mt-5">
            <InfoCard>
              <SelectCurrency />
            </InfoCard>
            <InfoCard>
              <CurrencyValue />
            </InfoCard>
            {/* <ExchangeRates rates={exchangeRates} /> */}
          </div>
        </div>
        <Divider variant="middle" className="my-10 w-1/4" />
        <div className="grid gap-4">
          <WalletSelected />
          <OldWalletAdvice />
          <WalletBalance />
        </div>
        <Divider variant="middle" className="my-10 w-1/4" />
        <div className="flex flex-col">
          <AddWalletForm />
          <WalletList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default MainPage;
