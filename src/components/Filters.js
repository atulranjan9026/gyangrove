import React from "react";

const Filters = ({ filterCategory, setFilterCategory, sortOrder, setSortOrder, categories }) => {
  return (
    <div className="filter-sort-container">
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        className="sort-button"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Quantity ({sortOrder})
      </button>
    </div>
  );
};

export default Filters;