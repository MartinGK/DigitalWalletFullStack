import React from "react";
import cx from "classnames";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const OldWalletAdvice: React.FC = () => {
  const isOldWallet = true;
  return (
    <div
      className={cx(
        isOldWallet ? "h-10" : "h-0",
        "transition-all duration-100 bg-red-400 border-red-500 border-1 rounded text-red-950 flex  items-center w-full px-3"
      )}
    >
      <WarningAmberIcon className="mr-3 font-bold" /> <strong>Wallet is old!</strong>
    </div>
  );
};

export default OldWalletAdvice;
