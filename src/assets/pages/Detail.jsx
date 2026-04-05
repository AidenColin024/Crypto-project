// import react(router) hooks en css
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detail.css";
import { useNavigate } from "react-router-dom";

function Detail() {
  //haal id op uit url, maak state voor munt en navigate functie
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const navigate = useNavigate();
  //laad de munt bij het laden van de pagina
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);
  //toon loading als de munt nog niet is geladen
  if (!coin) return <p>Loading...</p>;

  return (
    <div className="detail">
      {/* toon de details van de munt en een terug knop */}
      <h1>{coin.name}</h1>
      <p>Prijs: €{coin.market_data.current_price.eur}</p>
      <p>Market cap: {coin.market_data.market_cap.eur}</p>
      <p>Volume: {coin.market_data.total_volume.eur}</p>
      <p>Rank: {coin.market_cap_rank}</p>
      <button onClick={() => navigate(-1)}>Terug</button>
    </div>
  );
}
//export de component
export default Detail;