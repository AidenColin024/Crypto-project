function Favorites({ coins, favorites }) {
  const favoriteCoins = coins.filter((coin) =>
    favorites.includes(coin.id)
  );

  return (
    <div>
      <h2>Favorieten</h2>

      {favoriteCoins.length === 0 ? (
        <p>Geen favorieten</p>
      ) : (
        favoriteCoins.map((coin) => (
          <p key={coin.id}>{coin.name}</p>
        ))
      )}
    </div>
  );
}

export default Favorites;