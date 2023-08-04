import { useState } from "react";
import React from "react";


function ProductDetail ({item,addToItem}) {
    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
    return (
        
            <div key={item.id} className="card hoverable" >
                <div style={{padding: "20px"}} >
                <img src= {item.image} className="card-img-top " style={{ width: "240px"}}  alt="..."/>
                </div>
                <div className="card-body bg-body-secondary ">
                    <p className="fw-bold">{item.title}</p>
                    <label type="number">${item.price}</label>
                    {/* <p className="fw-lighter">{item.description}</p> */}
                    <br/>
                    <hr/>
                    <br/>
                    <i className="bi bi-bag-fill position-absolute bottom-0 end-0 m-2  " onClick={addToItem} id={item.id} style={{fontSize: "2rem", color: "green", cursor:"pointer" }} ></i>
                    <i
                    className={`bi position-absolute bottom-0 start-0 m-2 ${isActive ? 'bi-heart-fill text-danger' : 'bi-heart'}`}
                    style={{ fontSize: '2rem', cursor: 'pointer' }}
                    onClick={handleClick}
                    ></i>
                    </div>
            </div>        
        )

}

export default ProductDetail;