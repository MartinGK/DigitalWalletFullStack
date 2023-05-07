import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

interface ExchangeRatesProps {
  rates: { [currency: string]: number };
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ rates }) => {
  return (
    <Box>
      <h2>Exchange Rates</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rates).map(([currency, rate]) => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell>{rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ExchangeRates;
