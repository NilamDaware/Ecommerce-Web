import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp"; // Import Signup page
import SignIn from "./components/SignIn";
import Midsection from "./components/Midsection";
import ProductList from "./components/ProductList";
import Products from "./components/Products";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout/>} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/signin" element={<SignIn />} /> 

      </Routes>
      <Midsection/>
      <ProductList/>
      <Products/>

    </Router>
  );
};

// This component includes the Navbar only for non-signup pages
const Layout = () => {
  return (
    <>
      <Navbar />
       {/* Replace with other main content */}
    </>
  );
};

export default App;
