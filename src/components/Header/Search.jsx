const Search = ({ search, setSearch }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Recipes</label>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

export default Search;
