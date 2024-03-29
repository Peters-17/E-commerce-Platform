import React from 'react';
import '../styles/Checkout.css';

const Checkout = ({ cartItems, clearCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Simulate order processing
    console.log("Processing order for: ", cartItems);
    // Clear the cart after placing the order
    clearCart();
    alert("Order has been placed successfully!");
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Order Summary</h2>
      <div className="order-summary">
        {cartItems.map(item => (
          <div key={item.id} className="order-item">
            <h4>{item.title}</h4>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <div className="order-total">
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      </div>
      <button onClick={handleCheckout} className="checkout-button">Place Order</button>
    </div>
  );
};

export default Checkout;
