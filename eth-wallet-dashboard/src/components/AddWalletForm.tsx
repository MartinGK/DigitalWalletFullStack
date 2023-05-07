import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddWalletFormProps {
  onSubmit: (address: string) => void;
}

const AddWalletForm: React.FC<AddWalletFormProps> = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(address);
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField
          label="Wallet Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" className="bg-gray-100 text-black">
          Add Wallet
        </Button>
      </Box>
    </form>
  );
};

export default AddWalletForm;
