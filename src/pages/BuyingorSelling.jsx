import React from "react";
import "../styles/BuyingorSelling.css";

function BuyingorSelling() {
  return (
    <div className="buyingorselling">
      <h1 className="buyingorselling--title">
        Looking to purchase or sell equipment, parts or supplies?
      </h1>
      <p className="buyingorselling--para">
        Simply complete and submit the form below and one of our consultants
        will be in touch with you shortly.
      </p>
      <div className="buyorsell__form--wrapper">
        <div className="buyorsell__form--item">
          <input
            className="buyorsell--input"
            name="user_name"
            type="text"
            placeholder="Enter your Name"
            required
          ></input>
        </div>
        <div className="buyorsell__form--item">
          <input
            className="buyorsell--input"
            name="user_company"
            type="text"
            placeholder="Enter your Company"
            required
          ></input>
        </div>
        <div className="buyorsell__form--item">
          <input
            className="buyorsell--input"
            name="user_email"
            type="text"
            placeholder="Enter your Email"
            required
          ></input>
        </div>
        <div className="buyorsell__form--item">
          <input
            className="buyorsell--input"
            name="user_phone"
            type="text"
            placeholder="Enter your Phone"
            required
          ></input>
        </div>
        <div className="buyorsell__form--item">
          <input
            className="buyorsell--input"
            name="user_city"
            type="text"
            placeholder="Enter your City"
            required
          ></input>
        </div>
        <div className="buyorsell__form--item">
          <input
            className="buyorsell--input"
            name="user_stateorprov"
            type="text"
            placeholder="Enter the State/Province"
            required
          ></input>
        </div>
        <div className="buyorsell__form--item">
          <input
            className="buyorsell--input"
            name="user_ziporpostal"
            type="text"
            placeholder="Enter the Zip/Postal Code"
            required
          ></input>
        </div>
        <div className="form__item">
            <textarea
              className="buyorsell--input-area"
              name="user_description"
              type="text"
              placeholder="Description (If equipment please include Make, Model, and Meter)"
              required
            ></textarea>
          </div>
          <div className="form__item">
            <textarea
              className="buyorsell--input-area"
              name="user_addinfo"
              type="text"
              placeholder="Additional Information"
            ></textarea>
          </div>
      </div>
      <button className="form__submit">Submit</button>
    </div>
  );
}

export default BuyingorSelling;
