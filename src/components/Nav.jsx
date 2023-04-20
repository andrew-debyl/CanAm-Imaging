import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__img-container">
        <Link to="/">
          <img src='' alt='' className="nav__img" />
        </Link>
      </div>
      <div className="nav__links-container">
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__list">
            <Link to="/products" className="nav__link">Products</Link>
          </li>
          <li className="nav__list">
            <Link to="/services" className="nav__link">Services</Link>
          </li>
          <li className="nav__list">
            <Link to="/resources" className="nav__link">Resources</Link>
          </li>
          <li className="nav__list">
            <Link to="/about" className="nav__link">About</Link>
          </li>
          <li className="nav__list">
            <Link to="/contact" className="nav__link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
