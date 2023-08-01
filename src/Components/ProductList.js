import React from "react";
import ProductDetail from "./ProductDetail";

function ProductList({products}) {
    const listOfProducts = 
    products.map((item) => {
        return (
            <ProductDetail
            key={item.id}
            name={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category} 
            />
        )
    })
    return (
        <div>
            <ul>
                {listOfProducts}
            </ul>
        </div>
    )
}

export default ProductList; 
