import React, { useEffect, useState } from "react";
import SortBar from "./SortBar";
import ProductList from "./ProductList";
import Search from "./Search";
import Cart from "./Cart";
import About from "./About";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sortedProducts = selectedPrice
    ? filteredProducts.slice().sort((a, b) => {
        return selectedPrice === "low" ? a.price - b.price : b.price - a.price;
      })
    : filteredProducts;

  return (
    <>
      <i
        className="bi bi-cart-fill position-absolute top-0 end-0 m-4 "
        style={{ fontSize: "2rem", color: "cornflowerblue", cursor: "pointer" }}
        onClick={() => {
          const cart = document.querySelector(".cart");
          cart.classList.add("active");
        }}
      ></i>
      <div className="main-home position-relative">
        <div className="position-absolute top-0 start-0 p-3 mt-5">
          <h5 className="text-danger fs-3"> Discover our latest arrivals today!</h5>
          <h1 className="fw-bold fs-1">Latest and Greatest <br/>Items of 2023 <br/> Shop now!</h1>
          <p className="text-primary" >Shop with us and let your <br/> style speak for itself!</p>
        </div>
      </div>
      <hr/>
      <Search onSearch={handleSearch}  />
      <SortBar
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />
      {sortedProducts.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ProductList products={sortedProducts} className="shop-content" item={item} setItem={setItem} />
      )}
      <Cart item={item} setItem={setItem} />
      {/* Add the search button */}
      {/* Rest of the JSX code if any */}
      <br/>
      <About/>
    </>
  );
}

export default Home;
