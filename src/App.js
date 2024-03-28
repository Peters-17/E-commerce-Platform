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

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
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
