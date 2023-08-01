import React, {useEffect, useState} from "react";
import Search from "./Search";
import ProductList from "./ProductList"


function Home () {

    const[product, setProduct] = useState([])
    

    useEffect (() =>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then (product => setProduct(product))
    }, []
    )

    return (
        <div>
            <Search />
            <ProductList products={product}/>
        </div>
    )
}

export default Home;
