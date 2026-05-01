const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["All", "Story", "Tech", "Science"];

  return (
    <aside className="w-full lg:w-64">
      <div className="bg-base-200 p-6 rounded-2xl sticky top-24 shadow-sm border border-base-300">
        <h3 className="font-bold text-xl mb-4 border-b pb-2 border-base-300">
          Categories
        </h3>
        <ul className="flex flex-row lg:flex-col gap-2 flex-wrap">
          {categories.map((cat) => (
            <li key={cat} className="w-full">
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-ghost justify-start w-full text-left capitalize ${
                  selectedCategory === cat 
                    ? "bg-primary text-primary-content hover:bg-primary" 
                    : "hover:bg-base-300"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategoryBar;