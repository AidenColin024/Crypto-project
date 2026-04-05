import Coin from "./Coin";
// Coinlist component die een lijst van coins rendert
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