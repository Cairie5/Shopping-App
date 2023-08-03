import React from "react";
import ProductDetail from "./ProductDetail";

function ProductList({products, setItem, item}) {
    function addToItem(e) {
        const foundItem = products.find((item)=>{
            return item.id === parseInt(e.target.id)
        })
        if(!item.includes(foundItem)){
            setItem([...item, foundItem])
        }
    }



    const listOfProducts = products.map((item) => {
        // console.log(item)
        return (
            <ProductDetail
            key={item.id}
            item={item}
            addToItem={addToItem}
            />
           
        )
    })
    return (
        <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(249px, auto))", gap: "2rem" }}>
            {listOfProducts}
        </div>
    )
}

export default ProductList; 
