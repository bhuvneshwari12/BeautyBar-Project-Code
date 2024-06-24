
import React from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state.productData;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
