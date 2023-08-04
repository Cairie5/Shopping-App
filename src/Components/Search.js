import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Trigger live search on input change
  };

  const handleSearchButtonClick = () => {
    onSearch(searchTerm); // Trigger search when the button is clicked
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      <button onClick={handleSearchButtonClick}>Search</button>
    </div>
  );
}

export default Search;
