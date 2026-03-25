import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoins = async () => {
  const response = await axios.get(
    `${BASE_URL}/coins/markets?vs_currency=eur&per_page=100`
  );
  return response.data;
};

export const getCoinById = async (id) => {
  const response = await axios.get(`${BASE_URL}/coins/${id}`);
  return response.data;
};