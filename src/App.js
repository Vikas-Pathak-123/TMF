import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import logo from "./images/TMF.png";
import data from "./data/data";

function App() {
  const [product, setProduct] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" width="60rem" height="60rem" />
            </Link>
          </div>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/product">Product</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div>
            <button className="btn">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn">
              <Link to="/createuser">Sign Up</Link>
            </button>
          </div>
        </header>

        <main>
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route
              path="/product"
              element={
                <ProductScreen
                  product={product}
                  setProduct={setProduct}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartScreen cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
          </Routes>
        </main>

        <footer className="row center">All Rights Reserved</footer>
      </div>
    </Router>
  );
}

export default App;
