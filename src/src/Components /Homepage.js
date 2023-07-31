import React, {useEffect, useState} from "react";
import ProductList from "./ProductList"

function Homepage () {

    const[product, setProduct] = useState([])
    const [query, setQuery] = useState ("") 

    useEffect (() =>{
        fetch('https://fakestoreapi.com/products?=' + query)
        .then((res) => res.json())
        .then (product => setProduct(product))
    }, [query]
    )
    return (
        <div>
            <ProductList products={product} />
        </div>
    )
}

export default Homepage; 
