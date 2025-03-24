import React from "react";
import "./Products.css"; // Ensure this file exists

const Products = () => {
  const products = [
    { id: 1, name: "Glitter Dress", price: "Rs. 1000", img: "/partywear1.jpg" },
    { id: 2, name: "A-Line Cocktail Party Dress", price: "Rs. 2500", img: "/partywear2.jpg" },
    { id: 3, name: "Maxi Long Dress", price: "Rs. 1500", img: "/partwear3.jpg" },
    { id: 4, name: "Bodycon Cocktail Party Dress", price: "Rs. 1800", img: "/partywear4.jpg" },
  ];

  return (
    <div className="product-section">
      <h2>Partywear</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
