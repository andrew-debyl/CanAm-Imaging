import React from "react";
import "../styles/Supplies.css";
import { Link } from "react-router-dom";

function Supplies() {
  return (
    <div className="supplies">
      <h1 className="supplies--title">Supplies</h1>
      <hr className="supplies--hr" />
      <div className="supplies__body">
        <h3 className="supplies__body--title">
          We meet your print and copy needs for less
        </h3>
        <p className="supplies--para">
          CanAm Imaging carries a wide range of supplies from various
          manufacturers to help you meet your print and copy needs with ease. To
          purchase supplies, simply complete and submit this{" "}
          <Link to="/buyingorselling" className="supplies--link">
            form
          </Link>{" "}
          and we’ll get back to you within 4 hours.
        </p>
        <h3 className="supplies__body--title">
          Trade in surplus supplies for cash
        </h3>
        <p className="supplies--para">
          Why let your surplus supplies take up valuable storage space when you
          can trade them in for cash? Tell us what you’ve got and we’ll make you
          an offer.
        </p>
      </div>
    </div>
  );
}

export default Supplies;
