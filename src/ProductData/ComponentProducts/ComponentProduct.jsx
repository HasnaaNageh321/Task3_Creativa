import React from "react";
import products from "../ProductData/ProductData"; 
import './ComponentProductStyle.css'

const Products = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Additional details about {product.name}.</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
