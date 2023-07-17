import "./BlogPageStyle.css";

const Search = ({ search, setSearch }) => {
  return (
    <form className="blogPageSearchForm" onSubmit={(e) => e.preventDefault()}>
      <label className="blogPageSearchLabel" htmlFor="search">
        Search Posts
      </label>
      <input
        className="blogPageSearchInput"
        type="search"
        name="search"
        id="search"
        placeholder="Search Posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
