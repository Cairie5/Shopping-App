import React, { useEffect, useState } from "react";
import SortBar from "./SortBar";
import ProductList from "./ProductList";
import Cart from "./Cart";


function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const[item, setItem] = useState([])


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

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const sortedProducts = selectedPrice
    ? filteredProducts.slice().sort((a, b) => {
        return (
          selectedPrice === "low" ? a.price - b.price : b.price - a.price
        );
      })
    : filteredProducts;

  return (
    <>
      <i className="bi bi-cart-fill position-absolute top-0 end-0 m-4 " style={{fontSize: "2rem", color: "cornflowerblue", cursor:"pointer",transform: 'translateY(-20px)' }}   onClick={() => {const cart = document.querySelector(".cart");cart.classList.add("active");}}></i>
      <div className="main-home">
        <h5 className="text-danger fs-3"> Discover our latest arrivals today!</h5>
        <h1 className="fw-bold fs-1">Latest and Greatest Items of 2023 <br/> Shop now!</h1>
        <p className="text-primary" >Shop with us and let your style speak for itself!</p>
      </div>
      <br/>
      <SortBar
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />
      <hr/>
      <ProductList products={sortedProducts} className="shop-content" item={item} setItem={setItem}/>
      <Cart item={item} setItem={setItem} />
    </>
  );
}

export default Home;
