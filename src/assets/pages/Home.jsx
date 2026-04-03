import { useEffect, useState } from "react";
import { getCoins } from "../services/api";
import Coin from "../components/coin";
import SearchBar from "../components/searchbar";
import "./home.css";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    loadCoins();
  }, []);

  const loadCoins = async () => {
    const data = await getCoins();
    setCoins(data);
  };

  return (
    <div className="container">
      <h1>Crypto Dashboard</h1>

      <SearchBar setSearch={setSearch} />

      <div className="coin-list">
        {filteredCoins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default Home;