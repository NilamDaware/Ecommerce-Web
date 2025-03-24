import React from "react";
import "./Productlist.css"

const ProductList = () => {
  const products = [
    { id: 1, image: "/partywear1.jpg", name: "Partywear" },
    { id: 2, image: "/top1.jpg", name: "Top Wear" },
    { id: 3, image: "/bottom1.jpg", name: "Bottomwear" },
    { id: 4, image: "/winter1.jpg", name: "Winterwear" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Explore</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
