import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        className="search"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
}

export default SearchBar;
