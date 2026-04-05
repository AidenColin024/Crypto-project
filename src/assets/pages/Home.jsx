// import React hooks, Api, css en componenten.
import { useEffect, useState } from "react";
import { getCoins } from "../services/api";
import Coin from "../components/Coin";
import SearchBar from "../components/searchbar";
import "./Home.css";
import Favorites from "../components/Favorites";
import Coinlist from "../components/Coinlist";
import MarketChard from "../components/marketchard";
import "../components/coin.css";
import "../components/Favorites.css";
import "../components/Marketchard.css";
import "../components/Searchbar.css";
function Home() {
  //state: lijst, zoekterm en favorieten
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  //filter de lijst op zoekterm
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  //functie om favorieten toe te voegen/verwijderen
  const toggleFavorite = (coinId) => {
    if (favorites.includes(coinId)) {
      setFavorites(favorites.filter((id) => id !== coinId));
    } else {
      setFavorites([...favorites, coinId]);
    }
  };
  //laad de lijst bij het laden van de pagina
  useEffect(() => {
    loadCoins();
  }, []);
  //functie om de lijst te laden
  const loadCoins = async () => {
    const data = await getCoins();
    setCoins(data);
  };
  //render de pagina
  return (
    <div className="container">
      <h1>Crypto Dashboard</h1>
      {/* zoekbalk, favorieten en grafiek */}
      <SearchBar setSearch={setSearch} />
      <Favorites coins={coins} favorites={favorites} />
      <div className="marketchard">
        <MarketChard coins={coins} />
      </div>
      {/* lijst van munten */}
      <div className="coin-list">
        <Coinlist coins={filteredCoins} toggleFavorite={toggleFavorite} favorites={favorites} />
      </div>
    </div>
  );
}

export default Home;