import React from "react";
import logo from "../assets/logo.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo--container">
          <Link to="/">
            <img src={logo} alt="" className="footer--logo" />
          </Link>
        </div>
        <div className="footer__links--container">
          <ul className="footer__links">
            <li className="footer__link--container">
              <Link to="/" className="footer__link" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/products" className="footer__link" onClick={scrollToTop}>
                Products
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/services" className="footer__link" onClick={scrollToTop}>
                Services
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/resources" className="footer__link" onClick={scrollToTop}>
                Resources
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/about" className="footer__link" onClick={scrollToTop}>
                About
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/contact" className="footer__link" onClick={scrollToTop}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          Copyright © 2005 CanAm Imaging Products Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;
