function Favourites({ coins, toggleFavorite, favorites }) {
    const favoriteCoins = coins.filter((coin) => favorites.includes(coin.id));
}

return(
    <div>
        <h2>Favorieten</h2>
        {favoriteCoins.length === 0 ? (
            <p>Je hebt nog geen favorieten toegevoegd.</p>
        ) : (
            <div className="coin-list">
                {favoriteCoins.map((coin) => (
                    <Coin key={coin.id} coin={coin} toggleFavorite={toggleFavorite} favorites={favorites} />
                ))}
            </div>
        )}
    </div>
);

export default Favourites;