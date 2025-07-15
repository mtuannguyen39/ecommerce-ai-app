import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm khóa học...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
      />
      <button className="search-btn" onClick={onSearch}>
        Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;
