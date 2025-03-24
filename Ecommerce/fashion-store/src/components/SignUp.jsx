import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./SignUp.css";
import { FaUserPlus, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Sign Up</h1>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <div className="input-wrapper">
                <FaUserPlus />
                <input type="text" id="first_name" placeholder="Enter your first name" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <div className="input-wrapper">
                <FaUserPlus />
                <input type="text" id="last_name" placeholder="Enter your last name" required />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <FaEnvelope />
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FaLock />
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                minLength="8"
                required
              />
              {passwordVisible ? (
                <FaEye onClick={() => setPasswordVisible(false)} />
              ) : (
                <FaEyeSlash onClick={() => setPasswordVisible(true)} />
              )}
            </div>
            <p className="password-hint">Minimum length is 8 characters.</p>
          </div>
          <button type="submit" className="sign-up-btn">Sign Up</button>
          <div className="login-link">
            <p>
              Already have an account?  
              <span onClick={() => navigate("/signin")} style={{ cursor: "pointer", color: "#32253F", fontWeight: "bold" }}>
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
