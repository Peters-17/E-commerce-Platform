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
  }, [limit, skip, searchCategory, searchTerm]); // Add searchCategory and searchTerm as dependencies

  useEffect(() => {
    setSkip(0); // 每次resetPagination变化时重置页数
  }, [resetPagination]);

  const goToProductDetails = (id) => {
    navigate(`/product/${id}`); // 导航到产品详情页面
  };

  const fetchAllProducts = async () => {
    try {
      let products = [];
      let url;
  
      if (searchCategory && searchCategory !== "All Categories") {
        // 如果有指定类别，先获取该类别下的所有商品
        url = `https://dummyjson.com/products/category/${encodeURIComponent(searchCategory)}`;
      } else {
        // 如果没有指定类别，获取所有商品
        url = `https://dummyjson.com/products?limit=0`; // 使用limit=0获取所有商品
      }
  
      // 先获取类别下的所有商品
      let response = await axios.get(url);
      products = response.data.products || [];
  
      // 如果搜索词不为空，则进一步筛选包含搜索词的商品
      if (searchTerm) {
        products = products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      // 设置分页数据
      products = products.slice(skip, skip + limit);
  
      // 更新状态
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
