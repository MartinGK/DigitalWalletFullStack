"use client"
import React, { useContext, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Wallet } from '@/interfaces';
import api from '@/api';
import { GlobalContext } from '@/contexts/globalContext';

const AddWalletForm: React.FC = () => {
  const [address, setAddress] = useState('');
  const {wallets, setWallets} = useContext(GlobalContext);


  const handleAddWallet = async (address: string) => {
    try {
      const response = await api.post("/wallets", { address });
      const newWallet: Wallet = response.data;
      setWallets([...wallets, newWallet]);
    } catch (error) {
      console.error("Error adding wallet:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddWallet(address);
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full">
      <Box display="flex" justifyContent="center" alignItems="center" className="h-full">
        <TextField
          label="Wallet Address"
          className='w-full mr-2'
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" className="bg-gray-100 text-black whitespace-nowrap h-full px-10 hover:bg-gray-400">
          Add Wallet
        </Button>
      </Box>
    </form>
  );
};

export default AddWalletForm;
