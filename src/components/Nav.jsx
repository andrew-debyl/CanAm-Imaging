import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/logo.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Nav() {
  return (
    <div className="nav--container">
    <nav className="nav">
      <div className="nav__img-container">
        <Link to="/">
          <img src={logo} alt="" className="nav__img" />
        </Link>
      </div>
      <div className="nav__links-container">
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list dropdown__list">
            <Link to="/products" className="nav__link">
              Products
              <ChevronDownIcon className="dropdown--btn" />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/equipment">Equipment</Link>
              </li>
              <li>
                <Link to="/parts">Parts</Link>
              </li>
              <li>
                <Link to="/supplies">Supplies</Link>
              </li>
            </ul>
          </li>
          <li className="nav__list dropdown__list">
            <Link to="/services" className="nav__link">
              Services
              <ChevronDownIcon className="dropdown--btn" />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/techsupport">Tech Support</Link>
              </li>
              <li>
                <Link to="/buyingorselling">Buying or Selling</Link>
              </li>
            </ul>
          </li>
          <li className="nav__list">
            <Link to="/resources" className="nav__link">
              Resources
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/contact" className="contact--us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
