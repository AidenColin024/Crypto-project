import Coin from "./Coin";

function Coinlist({ coins, toggleFavorite, favorites }) {
  return (
    <div>
      {coins.map((coin) => (
        <Coin key={coin.id} coin={coin} toggleFavorite={toggleFavorite} favorites={favorites} />
      ))}
    </div>
  );
}

export default Coinlist;