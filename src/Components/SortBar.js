import React, { useState } from "react";

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
      <div>
        <label htmlFor="category" className="fw-bold fs-5">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="form-select mb-3" // <--- Update 'class' to 'className'
          aria-label="Default select example"
          style={{ width: "360px" }}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div style={{ transform: 'translateY(-85px) translateX(430px)' }}>
        <label htmlFor="price" className="fw-bold fs-5">Price:</label>
        <select
          id="price"
          value={selectedPrice}
          style={{ width: "360px" }}
          aria-label="Default select example"
          className="form-select mb-3" // <--- Update 'class' to 'className'
          onChange={handlePriceChange}
        >
          <option value="">All</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SortBar;
