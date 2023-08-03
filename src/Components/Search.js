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
        <div class="row">
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
                    <div class="card col-2 m-1" key={i}>
                        <img src= {row.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p className="fw-bold">{row.title}</p>
                            <label type="number">{row.price}</label>
                            <i class="bi bi-bag-plus"></i>
                        </div>
                    </div>   
                </div>
            );
            })}
        </div>
    </div>
  );
}

export default Search;
