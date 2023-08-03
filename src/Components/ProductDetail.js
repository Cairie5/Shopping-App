import React from "react";

function ProductDetail ({item,addToItem}) {
    return (
        
            <div key={item.id} className="card hoverable" >
                <div style={{padding: "20px"}}>
                <img src= {item.image} className="card-img-top " style={{ width: "240px"}}  alt="..."/>
                </div>
                <div className="card-body bg-body-secondary ">
                    <p className="fw-bold">{item.title}</p>
                    <label type="number">${item.price}</label>
                    {/* <p className="fw-lighter">{item.description}</p> */}
                    <br/>
                    <i className="bi bi-bag-fill position-absolute bottom-0 end-0 m-2 " onClick={addToItem} id={item.id} style={{fontSize: "2rem", color: "green", cursor:"pointer" }} ></i>
                </div>
            </div>        
        )

}

export default ProductDetail;