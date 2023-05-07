import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface Wallet {
  id: string;
  address: string;
}

interface WalletListProps {
  wallets: Wallet[];
}

const WalletList: React.FC<WalletListProps> = ({ wallets }) => {
  return (
    <List>
      {wallets.map((wallet) => (
        <ListItem key={wallet.id}>
          <ListItemText primary={wallet.address} />
        </ListItem>
      ))}
    </List>
  );
};

export default WalletList;
