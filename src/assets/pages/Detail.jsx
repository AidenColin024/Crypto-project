import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detail.css";

function Detail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);

  if (!coin) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h1>{coin.name}</h1>

      <p>Prijs: €{coin.market_data.current_price.eur}</p>
      <p>Market cap: {coin.market_data.market_cap.eur}</p>
      <p>Volume: {coin.market_data.total_volume.eur}</p>
      <p>Rank: {coin.market_cap_rank}</p>
    </div>
  );
}

export default Detail;