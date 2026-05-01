const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="text-center mb-10">
      <input
        type="text"
        placeholder="Search for a book title..."
        className="input input-bordered w-full max-w-xl shadow-sm focus:border-primary"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;