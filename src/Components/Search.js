import React, { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="row">
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search items here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {data.filter((row) =>{
          if (search === "") {
            return row;
          } else if (
            row.title.toLowerCase().includes(search.toLowerCase())
          ) {
            return row;
          }
        })
        .map((row, i) => {
          return (
            <div className="card" key={i}>
              <div className="image">
                <img src={row.image} alt={row.image} />
              </div>
              <div className="title">
                <h2>{row.title.substring(0, 20)}</h2>
                <p>{row.price}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Search;
