import React from "react";

function Cart({ item, setItem }) {
  const handleRemove = (id) => {
    setItem(item.filter((items) => items.id !== id));
  };


  function handleQuantityChange(id, newQuantity) {
    setItem(
      item.map((items) =>
        items.id === id ? { ...items, quantity: newQuantity } : items
      )
    );
  }

  const totalPrice = item.reduce(
    (total, items) => total + items.price * (items.quantity || 1),
    0
  );

  const cartItem = item.map((items) => {
    function getTotalPrice() {
      return (items.quantity || 1)  * items.price;
    }
    return (
      <div key={items.id} className="cart-box border border-primary p-1 mb-2 rounded ">
        <img src={items.image} alt="" className="cart-img border border-black" />
        <div className="detail-box ">
          <div className="cart-product-title fw-semibold" style={{ textTransform: "uppercase", fontSize: "13px" }}>{items.title}</div>
          <div className="cart-product-title fw-medium" style={{ fontSize: "14px" }}>$ {getTotalPrice().toFixed(2)}</div>
          <input type="number" className="cart-quantity" value={items.quantity || 1} min={1} onChange={(event) => handleQuantityChange(items.id, event.target.value)}
            style={{
              border: "1px solid black",
              outlineColor: "red",
              width: "2.4rem",
              textAlign: "center",
              fontSize: "1rem",
            }}
          />
        </div>
        <i className='bi bi-trash-fill cart-remove' onClick={()=>handleRemove(items.id)} style={{fontSize: "25px", color: "red", cursor:"pointer"}}></i>
      </div>
    );
  });
    
  return (
        <div>
            <div  className="cart "  style={{overflowY:"auto",maxHeight: "calc(100vh - 100px)"}}>
                <i className="bi bi-x-square-fill position-absolute top-0 start-0 m-3" style={{fontSize: "24px", color: "red", cursor:"pointer" }} onClick={() => {const cart = document.querySelector(".cart");cart.classList.remove("active");}}></i>
                <h2 style={{textAlign:'center', fontWeight:"600", marginTop: "2rem"}}>Your Cart</h2>
                <hr/>
                {cartItem }
                <br/>
                <hr/>
                <p className="fs-5 fw-bold">Total price: ${totalPrice.toFixed(2)}</p>
                <button type="button" className="btn btn-outline-success" style={{display: "flex", margin: "1.5rem auto 0 auto", padding: "12px 20px", fontSize:"1rem", fontWeight:"500", cursor: "pointer"}}>BUY</button>
            </div>
        </div>
     )
}

export default Cart;