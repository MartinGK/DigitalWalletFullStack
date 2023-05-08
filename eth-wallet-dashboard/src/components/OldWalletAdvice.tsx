import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { GlobalContext } from "@/contexts/globalContext";
import { isWalletOld } from "@/api";

const OldWalletAdvice: React.FC = () => {
  const { selectedWallet } = useContext(GlobalContext);
  const [walletIsOld, setWalletIsOld] = useState<boolean>(false);

  useEffect(() => {
    const checkIfWalletIsOld = async (address: string) => {
      const response = await isWalletOld(address);
      setWalletIsOld(response.isOld);
    };

    if (selectedWallet.address) {
      checkIfWalletIsOld(selectedWallet.address);
    }
  }, [selectedWallet]);

  return (
    <div
      className={cx(
        walletIsOld ? "h-10" : "h-0",
        "transition-all overflow-hidden min-h-fit duration-100 bg-red-400 border-red-500 border-1 rounded text-red-950 flex  items-center w-full px-3"
      )}
    >
      <WarningAmberIcon className="mr-3 font-bold" />{" "}
      <strong>Wallet is old!</strong>
    </div>
  );
};

export default OldWalletAdvice;
