import { useEffect, useState } from "react";
import { getCoins } from "../services/api";
import Coin from "../components/Coin";
import SearchBar from "../components/Searchbar";
import "./Home.css";
import Favorites from "../components/Favorites";
import Coinlist from "../components/Coinlist";
import MarketChard from "../components/marketchard";
import "../components/coin.css";
import "../components/Favorites.css";
import "../components/marketchard.css";
import "../components/Searchbar.css";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (coinId) => {
    if (favorites.includes(coinId)) {
      setFavorites(favorites.filter((id) => id !== coinId));
    } else {
      setFavorites([...favorites, coinId]);
    }
  };

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
      <Favorites coins={coins} favorites={favorites} />
      <MarketChard coins={coins} />

      <div className="coin-list">
        <Coinlist coins={filteredCoins} toggleFavorite={toggleFavorite} favorites={favorites} />
      </div>
    </div>
  );
}

export default Home;