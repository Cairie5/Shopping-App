import React, { useState } from "react";

function Cart({ item, setItem }) {
  const handleRemove = (id) => {
    setItem(item.filter((items) => items.id !== id));
  };

  const cartItem = item.map((items) => {
    return (
      <div key={items.id} className="cart-box border border-primary p-1 mb-2 rounded">
        <img src={items.image} alt="" className="cart-img border border-black" />
        <div className="detail-box">
          <div className="cart-product-title" style={{ textTransform: "uppercase", fontSize: "13px" }}>
            {items.title}
          </div>
          <div className="cart-price" style={{ fontWeight: "500" }}>
            {items.price}
          </div>
        </div>
        <i
          className="bi bi-trash-fill cart-remove"
          onClick={() => handleRemove(items.id)}
          style={{ fontSize: "25px", color: "red", cursor: "pointer" }}
        ></i>
      </div>
    );
  });

  const totalPrice = item.reduce((acc, curr) => acc + curr.price, 0);

  const [paymentOption, setPaymentOption] = useState(""); // State to store the selected payment option.

  const handlePaymentOption = (option) => {
    setPaymentOption(option); // Update the paymentOption state with the selected option.
  };

  const handleConfirmPayment = () => {
    if (paymentOption === "") {
      alert("Please select a payment option.");
    } else {
      alert(`You have selected ${paymentOption}. Payment successful!`); // Confirmation alert for successful payment.
    }
  };

  return (
    <div>
      <div className="cart" style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }}>
        {/* Existing code ... */}
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
        {/* Existing code ... */}
        <button
          type="button"
          className="btn btn-outline-success"
          style={{ display: "flex", margin: "1.5rem auto 0 auto", padding: "12px 20px", fontSize: "1rem", fontWeight: "500", cursor: "pointer" }}
          onClick={handleConfirmPayment}
        >
          CONFIRM PAYMENT
        </button>
      </div>
    </div>
  );
}

export default Cart;
