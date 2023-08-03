import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__title--wrapper">
        <h1 className="contact__title">Contact Us</h1>
      </div>
      <div className="contact__wrapper">
        <div className="contact__left">
          <div className="contact__poc">
            <h3 className="contact__poc--title">United States</h3>
            <p>50 Greenleaf Street Rochester, New York, 14609</p>
            <p>
              <b>Toll Free:</b> 1-866-758-0007
            </p>
            <p>
              <b>Phone:</b> (585) 224-4033
            </p>
          </div>
          <div className="contact__poc">
            <h3 className="contact__poc--title">Canada</h3>
            <p>7321 Victoria Park Ave Unit 3, Markham ON, L3R2Z8</p>
            <p>
              <b>Toll Free:</b> 1-866-758-0007
            </p>
            <p>
              <b>Phone:</b> (905) 770-1118
            </p>
          </div>
          <div className="contact__emails">
            <h3 className="contact__poc--title">Contact Emails</h3>
            <h4>General Contact</h4>
            <div className="email--wrapper">
              <a href="mailto:info@canamimaging.com" className="email">
                info@canamimaging.com
              </a>
            </div>
            <h4>Parts</h4>
            <div className="email--wrapper">
              <a href="mailto:parts@canamimaging.com" className="email">
                parts@canamimaging.com
              </a>
            </div>
            <h4>Supplies</h4>
            <div className="email--wrapper">
              <a href="mailto:supplies@canamimaging.com" className="email">
                supplies@canamimaging.com
              </a>
            </div>
            <h4>Technical Support</h4>
            <div className="email--wrapper">
              <a href="mailto:tech@canamimaging.com" className="email">
                info@canamimaging.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <h2>Contact Us</h2>
          <div className="form__item">
            <input
              className="input"
              name="user_name"
              type="text"
              placeholder="Enter your Name"
              required
            ></input>
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
            <input
              className="input"
              name="user_phone"
              type="text"
              placeholder="Enter your Phone"
              required
            ></input>
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
              className="input"
              name="message"
              type="text"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <button className="form__submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
