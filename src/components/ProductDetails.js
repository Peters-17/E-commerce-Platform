import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
//import '../styles/ProductDetails.css'; // 你需要创建这个CSS文件
import RatingStars from './RatingStars';

const ProductDetails = ({addToCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // 获取URL参数中的产品id
  const navigate = useNavigate(); // 使用useNavigate钩子

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  // 添加返回主页的函数
  const goBackToHome = () => {
    navigate('/'); // 使用 navigate 函数跳转到主页
  };

  if (!product) {
    return <div>Loading...</div>; // 在加载时显示加载指示符
  }

  return (
    <div className="product-details">
      <button onClick={goBackToHome}>Back to Home</button> {/* 添加返回主页的按钮 */}
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: <RatingStars rating={product.rating} /></p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`${product.title} image ${index + 1}`} />
        ))}
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
