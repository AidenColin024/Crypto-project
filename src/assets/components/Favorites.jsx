function Favorites({ coins, favorites }) {
  // filter de coins die in favorites zitten op baiss van id
  const favoriteCoins = coins.filter((coin) =>
    favorites.includes(coin.id)
  );
  // render de favorieten
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