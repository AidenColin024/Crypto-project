function SearchBar({ setSearch }) {
  // render de searchbar
  // onChange zorgt ervoor dat de search state wordt bijgewerkt als de gebruiker iets typt
  return (
    <input
      type="text"
      placeholder="Zoek coin..."
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        margin: "10px",
        width: "200px"
      }}
    />
  );
}

export default SearchBar;