import { useEffect, useState } from "react";
import { getCoins } from "../services/api";
import Coin from "../components/coin";

function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    loadCoins();
  }, []);

  const loadCoins = async () => {
    const data = await getCoins();
    setCoins(data);
  };

  return (
    <div>
      <h1>Crypto Dashboard</h1>

      {coins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default Home;