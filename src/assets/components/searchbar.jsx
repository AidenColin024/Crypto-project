function SearchBar({ setSearch }) {
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