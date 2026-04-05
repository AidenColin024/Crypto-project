import { Link } from "react-router-dom";

function Coin({ coin, toggleFavorite, favorites }) {
  //check of coin in favorites zit
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
          {/* toFixed zorgt ervoor dat er maar 2 cijfers achter de komma staan */}
          Verandering:{" "}
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </p>
        {/* zorgt ervoor dat je niet naar details gaat als je op de ster klikt */}
        <button onClick={(e) => {e.preventDefault();e.stopPropagation();toggleFavorite(coin.id);}}>
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </Link>
  );
}

export default Coin;