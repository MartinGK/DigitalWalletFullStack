"use client"
import React, { useState, useEffect } from 'react';
import WalletList from '../components/WalletList';
import AddWalletForm from '../components/AddWalletForm';
import ExchangeRates from '../components/ExchangeRates';
import api from '../api';
import '../styles/global.css';

interface Wallet {
  id: string;
  address: string;
}

const MainPage: React.FC = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [exchangeRates, setExchangeRates] = useState<{ [currency: string]: number }>({});

  useEffect(() => {
    // get wallet list from api
    const fetchWalletsAndExchangeRates = async () => {
      try {
        const walletResponse = await api.get('/wallets');
        setWallets(walletResponse.data);

        const exchangeRateResponse = await api.get('/exchange-rates');
        setExchangeRates(exchangeRateResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWalletsAndExchangeRates();
  }, []);

  const handleAddWallet = async (address: string) => {
    try {
      const response = await api.post('/wallets', { address });
      const newWallet: Wallet = response.data;
      setWallets((prevWallets) => [...prevWallets, newWallet]);
    } catch (error) {
      console.error('Error adding wallet:', error);
    }
  };

  return (
    <div className="bg-white text-black h-screen flex flex-col items-center pt-20">
      <h1>Ethereum Wallet Analytics</h1>
      <AddWalletForm onSubmit={handleAddWallet} />
      <WalletList wallets={wallets} />
      <ExchangeRates rates={exchangeRates} />
    </div>
  );
};

export default MainPage;
