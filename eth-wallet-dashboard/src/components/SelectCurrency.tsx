import React, { useContext, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { GlobalContext } from "@/contexts/globalContext";
import { getCurrencies } from "@/api";

export default function SelectVariants() {
  const { currencies, setCurrencies, selectedCurrency, setSelectedCurrency } = useContext(GlobalContext);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCurrency(event.target.value);
  };

  useEffect(() => {
    async function fetchCurrencies() {
      const currencies = await getCurrencies();
      setCurrencies(currencies);
      setSelectedCurrency(currencies[0].currency);
    }

    fetchCurrencies();
  }, []);

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
        className="w-full pr-10"
      >
        <InputLabel id="select-currency-label">Currency</InputLabel>
        <Select
          labelId="select-currency-label"
          id="select-currency"
          value={selectedCurrency}
          onChange={handleChange}
          className="w-full"
          label="Currency"
        >
          {currencies.map((cur) => {
            return <MenuItem key={cur.currency} value={cur.currency}>{cur.currency}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
