import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./SignIn1.css";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Sign In</h1>
        <form action="#">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                minLength="8"
                required
              />
              {showPassword ? (
                <FaEyeSlash className="icon toggle-icon" onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye className="icon toggle-icon" onClick={() => setShowPassword(true)} />
              )}
            </div>
            <p className="helper-text">Minimum length is 8 characters.</p>
          </div>

          <button type="submit" className="btn">Sign In</button>
          <p className="signup-text">
            New to Fashion Store?  <span onClick={() => navigate("/signup")} style={{ cursor: "pointer", color: "#32253F", fontWeight: "bold" }}>
                Sign Up
              </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
