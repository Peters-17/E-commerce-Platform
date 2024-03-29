import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
import RatingStars from './RatingStars';

const ProductDetails = ({addToCart }) => {
  // Add a state variable to store the product details
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Fetch product details from the API by id
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  // Add the id dependency to the useEffect dependency array
  }, [id]);

  const goBackToHome = () => {
    navigate('/');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <button onClick={goBackToHome}>Back to Home</button>
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
          <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
        ))}
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
