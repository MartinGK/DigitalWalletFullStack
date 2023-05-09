"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import { GlobalContext } from "@/contexts/globalContext";
import { editCurrency } from "@/api";

export default function CurrencyValue() {
  const [currentRate, setCurrentRate] = useState<string>("0");
  const [editMode, setEditMode] = useState<boolean>(false);
  const { selectedCurrency, currencies, setCurrencies } =
    useContext(GlobalContext);

  const handleEditButton = useCallback(() => {
    setEditMode((prev) => !prev);
  }, [editMode]);

  const currentCurrencyRate = useCallback(() => {
    const currency = currencies.find(
      (cur) => cur.currency === selectedCurrency
    );
    return currency ? currency.rate : "0";
  }, [currencies, selectedCurrency]);

  useEffect(() => {
    setCurrentRate(currentCurrencyRate());
  }, [currentCurrencyRate]);

  const handleCancelChange = useCallback(() => {
    setCurrentRate(currentCurrencyRate());
    setEditMode(false);
  }, [currentCurrencyRate]);

  const handleConfirmChange = useCallback(() => {
    const currency = currencies.find(
      (cur) => cur.currency === selectedCurrency
    );

    if (currency?.id) {
      editCurrency({ id: currency.id, rate: currentRate });
      setCurrencies(
        [...currencies].map((cur) =>
          cur.id === currency.id ? { ...cur, rate: currentRate } : cur
        )
      );
      setEditMode(false);
    }
  }, [currencies, selectedCurrency, currentRate]);

  const handleChangeRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (editMode) setCurrentRate(event.target.value);
  };

  return (
    <div className="relative flex items-center h-full pl-3">
      {editMode ? (
        <div className="absolute top-2 right-2 flex">
          <CloseIcon
            className="text-red-600 h-5 w-5 cursor-pointer mr-1"
            onClick={handleCancelChange}
          />
          <CheckIcon
            className="text-green-600 h-5 w-5 cursor-pointer"
            onClick={handleConfirmChange}
          />
        </div>
      ) : (
        <EditIcon
          className="text-blue-600 absolute top-2 right-2 h-4 w-4 cursor-pointer"
          onClick={handleEditButton}
        />
      )}
      <TextField
        variant="standard"
        value={currentRate}
        onChange={handleChangeRate}
        type="number"
      >
        {currentRate} {selectedCurrency}
      </TextField>
    </div>
  );
}
