import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Trigger live search on input change
  };


  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
          className="form-control me-2"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search products..."
          />
        </form>
      </div>
    </nav>
  );
}

export default Search;
