import React from "react";
import "../styles/Parts.css";
import { Link } from "react-router-dom";

function Parts() {
  return (
    <div>
      <div className="parts">
        <h1 className="parts--title">Xerox and Kodak Digimaster Parts</h1>
        <hr className="parts--hr" />
        <p className="parts--para">
          CanAm Imaging provides Xerox parts to the I.S.O and Self-Service
          marketplace for the United States and Canada. Whether you’re looking
          for new or used Xerox parts, you can count on CanAm Imaging for parts
          that are fully guaranteed and competitively priced to help you run
          your business better – and for less.
        </p>
        <p className="parts--para">
          Get up to <b>75%</b> off a huge selection of 100% genuine Xerox parts
          and rest assured that we stand behind the products we sell, new and
          recycled. Decommissioned from working equipment, all recycled parts
          undergo a rigorous quality control process to ensure they’re in
          reliable working order prior to purchase.
        </p>
        <h3 className="parts--title2">Interested in selling Xerox parts?</h3>
        <Link to='/buyingorselling' className="parts--contact-link">
          Click Here
        </Link>
        <p className="parts--contact">
          <b>Phone:</b> <span className="red">+1 866-758-0007</span>
        </p>
        <p className="parts--contact">
          <b>Email: </b>
          <span>
            <a href="mailto:tech@canamimaging.com" className="email">
              parts@canamimaging.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Parts;
