import React from "react";
import "../styles/Contact.css";
import building from "../assets/outsidebuilding.jpeg"

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">We look forward to serving you</h1>
      <div className="contact__wrapper">
        <div className="contact__left">
          <h2>Contact Us</h2>
          <div className="form__item">
            <input className="input" name="user_name" type="text" placeholder="Enter your Name" required></input>
          </div>
          <div className="form__item">
            <input
              className="input"
              name="user_email"
              type="email"
              placeholder="Enter your Email"
              required
            ></input>
          </div>
          <div className="form__item">
            <input className="input" name="user_phone" type="text" placeholder="Enter your Phone" required></input>
          </div>
          <div className="form__item">
            <input
              className="input"
              name="user_company"
              type="text"
              placeholder="Company"
              required
            ></input>
          </div>
          <div className="form__item">
            <textarea
              className="input--message"
              name="message"
              type="text"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <button className="form__submit">
            Submit
          </button>
        </div>
        <div className="contact__right">
          <div className="contact__img--wrapper">
            <img className="contact--img" src={building} alt="" />
          </div>
        </div>
      </div>
      <div className="contact__bottom">
        <div className="contact__poc">
          <h3>United States</h3>
          <hr />
          <p>50 Greenleaf Street Rochester</p>
          <p>New York, 14609</p>
          <p>
            <b>Toll Free:</b> 1-866-758-0007
          </p>
          <p>
            <b>Phone:</b> (585) 224-4033
          </p>
          <p>
            <b>Fax:</b> (585) 224-3999
          </p>
        </div>
        <div className="contact__poc">
          <h3>Canada</h3>
          <hr />
          <p>7321 Victoria Park Ave Unit 3</p>
          <p>Markham ON, L3R2Z8</p>
          <p>
            <b>Toll Free:</b> 1-866-758-0007
          </p>
          <p>
            <b>Phone:</b> (905) 770-1118
          </p>
          <p>
            <b>Fax:</b> (905) 770-1119
          </p>
        </div>
        <div className="contact__emails">
          <h3>Contact Emails</h3>
          <hr />
          <h4>General Contact</h4>
          <p className="email">info@canamimaging.com</p>
          <h4>Parts</h4>
          <p className="email">parts@canamimaging.com</p>
          <h4>Supplies</h4>
          <p className="email">supplies@canamimaging.com</p>
          <h4>Technical Support</h4>
          <p className="email">tech@canamimaging.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/* 
          
           */
