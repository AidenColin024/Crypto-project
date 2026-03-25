import { useEffect, useState } from "react";
import { getCoins } from "../services/api";

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
        <p key={coin.id}>{coin.name}</p>
      ))}
    </div>
  );
}

export default Home;