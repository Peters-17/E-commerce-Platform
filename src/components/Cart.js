import React from 'react';
import '../styles/Cart.css';

export const Cart = ({ cartItems, setCartItems }) => {
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const changeQuantity = (productId, amount) => {
    setCartItems(cartItems.map(item => {
      if(item.id === productId) {
        const updatedQuantity = item.quantity + amount;
        return { ...item, quantity: updatedQuantity >= 0 ? updatedQuantity : 0 };
      }
      return item;
    }));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your Cart is Empty...</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p> {/* 显示单价 */}
              <button onClick={() => changeQuantity(item.id, 1)}>+</button>
              <button onClick={() => changeQuantity(item.id, -1)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};
