import React from "react";

function OneItem ({title, price, description, image, category}) {
    return (
        
        <div class="card">
            <img src= {image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <label type="number">{price}</label>
                <p>{category}</p>
                <i class="bi bi-bag-plus"></i>
            </div>
        </div>
    )
}
export default OneItem;
