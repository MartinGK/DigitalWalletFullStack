import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export async function getWallets() {
  const response = await api.get("/wallets");
  return response.data;
}

export async function favWallet({ id }: { id: string }) {
  const response = await api.put(`/wallets/${id}/favorite`);
  return response.data;
}

export async function getBalance(address: string) {
  try {
    const response = await axios.get(`/eth/balance/${address}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default api;
