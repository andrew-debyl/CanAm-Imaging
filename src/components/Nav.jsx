import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/logo.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Nav() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="nav--container">
      <nav className="nav">
        <div className="nav__img-container">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="" className="nav__img" />
          </Link>
        </div>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="nav__list dropdown__list">
            <Link to="/products" className="nav__link" onClick={scrollToTop}>
              Products
              <ChevronDownIcon className="dropdown--btn" />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/equipment" onClick={scrollToTop}>Equipment</Link>
              </li>
              <li>
                <Link to="/parts" onClick={scrollToTop}>Parts</Link>
              </li>
              <li>
                <Link to="/supplies" onClick={scrollToTop}>Supplies</Link>
              </li>
            </ul>
          </li>
          <li className="nav__list dropdown__list">
            <Link to="/services" className="nav__link" onClick={scrollToTop}>
              Services
              <ChevronDownIcon className="dropdown--btn" />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/techsupport" onClick={scrollToTop}>Tech Support</Link>
              </li>
              <li>
                <Link to="/buyingorselling" onClick={scrollToTop}>Buying or Selling</Link>
              </li>
            </ul>
          </li>
          <li className="nav__list">
            <Link to="/resources" className="nav__link" onClick={scrollToTop}>
              Resources
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/about" className="nav__link" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/contact" className="contact--us" onClick={scrollToTop}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
