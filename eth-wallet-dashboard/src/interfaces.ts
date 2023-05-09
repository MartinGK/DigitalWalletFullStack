export interface Wallet {
  id: string;
  address: string;
  isFavorite: boolean;
}

export interface ICurrency {
  createdAt: string;
  updatedAt: string;
  id: string;
  currency: string;
  rate: string;
}
