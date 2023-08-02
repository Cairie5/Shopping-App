import React, { useEffect, useState } from "react";

function SortBar({ categories, onCategoryChange, onPriceChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    onCategoryChange(selectedCategory);
  };

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setSelectedPrice(selectedPrice);
    onPriceChange(selectedPrice);
  };

  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label htmlFor="price">Price:</label>
      <select id="price" value={selectedPrice} onChange={handlePriceChange}>
        <option value="">All</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
}

export default SortBar;
