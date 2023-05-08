import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectVariants() {
  const [currency, setCurrency] = React.useState<string>('USD');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-currency-label">Currency</InputLabel>
        <Select
          labelId="select-currency-label"
          id="select-currency"
          value={currency}
          onChange={handleChange}
          label="Currency"
        >
          <MenuItem value='USD'>USD</MenuItem>
          <MenuItem value='Euro'>Euro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}