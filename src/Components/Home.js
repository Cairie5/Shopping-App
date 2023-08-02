import React, { useEffect, useState } from "react";
import SortBar from "./SortBar";
import ProductList from "./ProductList";
import Search from "./Search";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

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
    <div>
      <Search />
      <SortBar
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />
      <ProductList products={sortedProducts} className="shop-content" />
    </div>
  );
}

export default Home;
