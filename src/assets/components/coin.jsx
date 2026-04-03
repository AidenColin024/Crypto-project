import { Link } from "react-router-dom";

function Coin({ coin, toggleFavorite, favorites }) {
  const isFavorite = favorites.includes(coin.id);

  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h3>{coin.name}</h3>
        <p>Prijs: €{coin.current_price}</p>
        <p>
          Verandering:{" "}
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </p>
        <button onClick={() => toggleFavorite(coin.id)}>
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </Link>
  );
}

export default Coin;