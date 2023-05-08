import { GlobalContext } from "@/contexts/globalContext";
import React, { useContext } from "react";

const WalletSelected: React.FC = () => {
  const { selectedWallet } = useContext(GlobalContext);

  return (
    <h3 className="text-xl">
      Your wallet is <strong>{selectedWallet.address}</strong>
    </h3>
  );
};

export default WalletSelected;
