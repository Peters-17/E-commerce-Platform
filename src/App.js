import React, { useState } from 'react';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import Search from './components/Search';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [resetPagination, setResetPagination] = useState(false);

  const handleSearch = (term = '', category = '') => {
    setSearchTerm(term);
    setSearchCategory(category);
    setResetPagination(prev => !prev);
  };

  /**
    The ... extension operator is used to safely update the list of items (cartItems) in the cart, 
    either by increasing the number of existing products or by adding new products to the cart. 
    Using the extension operator ensures that the original state (the prevItems array and any item objects) 
    is not directly modified, which is an important principle of React state updates.
  */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
        // Update the quantity of the item
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add the product to the cart with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="App">
        <Search onSearch={handleSearch} />
        <div className="cart-checkout-container">
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
          <Checkout cartItems={cartItems} clearCart={clearCart} />
        </div>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/" element={
            <>
              <ProductList searchTerm={searchTerm} searchCategory={searchCategory} addToCart={addToCart} resetPagination={resetPagination}/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
