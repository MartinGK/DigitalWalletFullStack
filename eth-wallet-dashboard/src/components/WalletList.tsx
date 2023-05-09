"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { favWallet, getWallets } from "../api";
import { Wallet } from "@/interfaces";
import { GlobalContext } from "@/contexts/globalContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import cx from "classnames";
import SortIcon from "@mui/icons-material/Sort";

const WalletList: React.FC = () => {
  const { wallets, setWallets, setSelectedWallet } = useContext(GlobalContext);
  const [favsFirst, setFavsFirst] = useState<boolean>(true);

  useEffect(() => {
    async function fetchWallets() {
      const wallets = await getWallets();
      setWallets(wallets);
    }

    fetchWallets();
  }, []);

  const handleFavClick = async ({ id }: { id: string }) => {
    const newWallet = await favWallet({ id });
    const index = wallets.findIndex((w: Wallet) => w.id === newWallet.id);
    const newWallets = [...wallets];
    newWallets[index] = newWallet;
    setWallets(newWallets);
  };

  const sortWallets = useCallback(() => {
    setWallets(
      [...wallets].sort((a, b) => (a.isFavorite && favsFirst ? 1 : -1))
    );
    setFavsFirst(!favsFirst);
  }, [wallets, favsFirst]);

  return (
    <List className="grid">
      <ListItem
        className="py-5"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            className="flex mr-1 cursor-pointer"
            onClick={sortWallets}
          >
            <SortIcon className="absolute text-blue-600" />
          </IconButton>
        }
      />
      {wallets.map((wallet) => (
        <ListItem
          key={wallet.id}
          className="border border-gray-400 cursor-pointer"
          onClick={() => setSelectedWallet(wallet)}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="comments"
              className="flex mr-1"
              onClick={() => handleFavClick({ id: wallet.id })}
            >
              <FavoriteBorderIcon className="absolute text-red-600" />
              <FavoriteIcon
                className={cx("absolute text-red-600", {
                  hidden: !wallet.isFavorite,
                })}
              />
            </IconButton>
          }
        >
          <ListItemText primary={wallet.address} />
        </ListItem>
      ))}
    </List>
  );
};

export default WalletList;
