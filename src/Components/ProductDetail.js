import React from "react";

function ProductDetail ({title, price, description, image, category}) {
    return (
        
            <div class="card col-2 m-1">
                <img src= {image} class="card-img-top " alt="..."/>
                <div class="card-body">
                    <p className="fw-bold">{title}</p>
                    <label type="number">${price}</label>
                    <p class="fw-lighter">{description}</p>
                    <i class="bi bi-bag-plus"></i>
                </div>
            </div>        
        )

}

export default ProductDetail;