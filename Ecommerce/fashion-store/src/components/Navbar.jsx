import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/fashion.jpg" alt="Fashion Store Logo" />
      </div>
      <div className="brand">
        <p style={{ fontFamily: "'Bilbo Swash Caps', cursive", fontSize: "40px", fontWeight: "500" }}>
          Fashion Store
        </p>
      </div>
      <div className="search">
        <div className="searchbar">
          <input type="text" placeholder="Search" style={{ width: "700px", height: "30px" }} />
        </div>
        <div><i className="fa-solid fa-magnifying-glass"></i></div>
      </div>
      {/* Clicking Account div navigates to the Signup page */}
      <div className="acc" onClick={() => navigate("/signup")}>
        <i className="fa-solid fa-user"></i> Account
      </div>
      <div className="wishlist">
        <i className="fa-regular fa-heart"></i> Wishlist
      </div>
      <div className="cart">
        <i className="fa-solid fa-cart-shopping"></i> Cart
      </div>
    </div>
  );
};

export default Navbar;
