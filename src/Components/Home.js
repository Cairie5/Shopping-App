import React, {useEffect, useState} from "react";
import Search from "./Search";
import ProductList from "./ProductList"
import Cart from "./Cart";

function Home () {

    const[product, setProduct] = useState([])
    const[item, setItem] = useState([])
    

    useEffect (() =>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then (data => {
            setProduct(data)
        })
    }, []);

    return (
        <div>
            <i className="bi bi-cart-fill position-absolute top-0 end-0 m-4 " style={{fontSize: "2rem", color: "cornflowerblue", cursor:"pointer" }}   onClick={() => {const cart = document.querySelector(".cart");cart.classList.add("active");}}></i>
            <h2>PRODUCTS</h2>
            <Search />
            <ProductList products={product} className="shop-content" item={item} setItem={setItem}/>
            <Cart item={item} setItem={setItem} />
        </div>
    )
}

export default Home;
