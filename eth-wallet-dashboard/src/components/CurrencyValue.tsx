"use client"
import { useCallback, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";

export default function CurrencyValue() {
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEditButton = useCallback(() => {
    setEditMode((prev) => !prev);
  },[])

  return (
    <div className="relative flex items-center h-full pl-3">
      {editMode ? (
        <div className="absolute top-2 right-2 flex" onClick={handleEditButton}>
          <CloseIcon className="text-red-600 h-5 w-5 pointer mr-1" />
          <CheckIcon className="text-green-600 h-5 w-5 pointer"/>
        </div>
      ) : (
        <EditIcon className="text-blue-600 absolute top-2 right-2 h-4 w-4 pointer" onClick={handleEditButton}/>
      )}
      <TextField contentEditable={editMode} variant="standard" value={1.32}>1.32 </TextField>
    </div>
  );
}
