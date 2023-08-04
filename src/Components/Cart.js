import React, { useState } from "react";

function Cart({ item, setItem }) {
  const handleRemove = (id) => {
    setItem(item.filter((items) => items.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setItem(
      item.map((items) =>
        items.id === id ? { ...items, quantity: newQuantity } : items
      )
    );
  };

  const getTotalPrice = (items) => {
    return (items.quantity || 1) * items.price;
  };

  const totalPrice = item.reduce((total, items) => total + getTotalPrice(items), 0);

  const [paymentOption, setPaymentOption] = useState("");

  const handlePaymentOption = (option) => {
    setPaymentOption(option);
  };

  const handleConfirmPayment = () => {
    if (paymentOption === "") {
      alert("Please select a payment option.");
    } else {
      alert(`You have selected ${paymentOption}. Payment successful!`);
    }
  };

  return (
    <div>
      <div className={`cart ${paymentOption === "" ? "" : "active"}`}>
        <i
          className="bi bi-x-square-fill position-absolute top-0 start-0 m-3"
          style={{ fontSize: "24px", color: "red", cursor: "pointer" }}
          onClick={() => {
            const cart = document.querySelector(".cart");
            cart.classList.remove("active");
          }}
        ></i>
        <h2 style={{ textAlign: "center", fontWeight: "600", marginTop: "2rem" }}>Your Cart</h2>
        <hr />
        {item.map((items) => (
          <div key={items.id} className="cart-box border border-primary p-1 mb-2 rounded">
            <img src={items.image} alt="" className="cart-img border border-black" />
            <div className="detail-box">
              <div className="cart-product-title fw-semibold" style={{ textTransform: "uppercase", fontSize: "13px" }}>
                {items.title}
              </div>
              <div className="cart-product-title fw-medium" style={{ fontSize: "14px" }}>
                ${getTotalPrice(items).toFixed(2)}
              </div>
              <input
                type="number"
                className="cart-quantity"
                value={items.quantity || 1}
                min={1}
                onChange={(event) => handleQuantityChange(items.id, event.target.value)}
                style={{
                  border: "1px solid black",
                  outlineColor: "red",
                  width: "2.4rem",
                  textAlign: "center",
                  fontSize: "1rem",
                }}
              />
            </div>
            <i
              className="bi bi-trash-fill cart-remove"
              onClick={() => handleRemove(items.id)}
              style={{ fontSize: "25px", color: "red", cursor: "pointer" }}
            ></i>
          </div>
        ))}
        <br />
        <hr />
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-outline-success me-3"
            style={{ fontSize: "1rem", fontWeight: "500", cursor: "pointer" }}
            onClick={() => handlePaymentOption("PayPal")}
          >
            Pay with PayPal
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ fontSize: "1rem", fontWeight: "500", cursor: "pointer" }}
            onClick={() => handlePaymentOption("M-Pesa")}
          >
            Pay with M-Pesa
          </button>
        </div>
        <br />
        <button
          type="button"
          className="btn btn-outline-success"
          style={{
            display: "flex",
            margin: "1.5rem auto 0 auto",
            padding: "12px 20px",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
          }}
          onClick={handleConfirmPayment}
        >
          CONFIRM PAYMENT
        </button>
      </div>
    </div>
  );
}

export default Cart;
