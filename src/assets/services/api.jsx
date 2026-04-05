// import axios voor het maken van API calls
import axios from "axios";
// base URL voor de CoinGecko API
const BASE_URL = "https://api.coingecko.com/api/v3";
// functie om alle coins op te halen met een market cap van meer dan 1 miljoen euro
export const getCoins = async () => {
  const response = await axios.get(
    `${BASE_URL}/coins/markets?vs_currency=eur&per_page=100`
  );
  return response.data;
};
// functie om een specifieke coin op te halen op basis van id
export const getCoinById = async (id) => {
  const response = await axios.get(`${BASE_URL}/coins/${id}`);
  return response.data;
};