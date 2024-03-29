import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductList.css';
import { useNavigate  } from 'react-router-dom';

export const ProductList = ({ searchTerm, searchCategory, addToCart, resetPagination  }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts(); 
    // Add searchCategory and searchTerm as dependencies
  }, [limit, skip, searchCategory, searchTerm]);

  useEffect(() => {
    setSkip(0);
  }, [resetPagination]);

  const goToProductDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const fetchAllProducts = async () => {
    try {
      let products = [];
      let url;
  
      if (searchCategory && searchCategory !== "All Categories") {
        // Fetch products by category
        url = `https://dummyjson.com/products/category/${encodeURIComponent(searchCategory)}`;
      } else {
        // Fetch all products
        url = `https://dummyjson.com/products?limit=0`;
      }
  
      let response = await axios.get(url);
      products = response.data.products || [];
      // Filter products by search term
      if (searchTerm) {
        products = products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      products = products.slice(skip, skip + limit);
      // Update the products state
      setProducts(products);
      setFilteredProducts(products.length > 0 ? products : "Item not found");
    } catch (error) {
      console.error('Error fetching products:', error);
      setFilteredProducts("Item not found");
    }
  };
  
  
  return (
    <div className="product-list">
      {filteredProducts === "Item not found" ? (
        <p>{filteredProducts}</p>
      ) : (
        filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Rating: {product.rating} / 5</p>
              <button onClick={() => goToProductDetails(product.id)}>Click to learn more</button> {/* 添加查看详情按钮 */}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))
      )}
      <div className="pagination-container">
        <button onClick={() => setSkip(Math.max(skip - limit, 0))} disabled={skip === 0}>Prev Page</button>
        <button onClick={() => setSkip(skip + limit)} disabled={filteredProducts.length < limit || filteredProducts === "Item not found"}>Next Page</button>
      </div>
    </div>
    
  );
};
