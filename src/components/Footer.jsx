import React from "react";
import temp from "../assets/template_canamlogo.jpg";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo--container">
          <Link to="/"> 
            <img src={temp} alt="" />
          </Link>
        </div>
        <div className="footer__links--container">
          <ul className="footer__links">
            <li className="footer__link--container">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/products" className="footer__link">
                Products
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/services" className="footer__link">
                Services
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/resources" className="footer__link">
                Resources
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/about" className="footer__link">
                About
              </Link>
            </li>
            <li className="footer__link--container">
              <Link to="/contact" className="footer__link">
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
