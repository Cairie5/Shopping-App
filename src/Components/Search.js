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
    <div>
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
        <div class="card-group">
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
                <div >
                    <div class="card" key={i}>
                        <img class="card-img-top" src={row.image} alt={row.image} />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{row.title.substring(0, 20)}</h5>
                            <p class="card-text">{row.price}</p>
                    </div>
                </div>
            );
            })}
        </div>
    </div>
  );
}

export default Search;