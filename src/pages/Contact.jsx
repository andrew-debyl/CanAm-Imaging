import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">We look forward to serving you</h1>
      <div className="contact__wrapper">
        <div className="contact__left">
          <h2>Contact Us</h2>
          <div class="form__item">
            <label class="form__item--label">Name<span className="red">*</span></label>
            <input class="input" name="user_name" type="text" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Email<span className="red">*</span></label>
            <input
              class="input"
              name="user_email"
              type="email"
              required
            ></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Phone<span className="red">*</span></label>
            <input class="input" name="user_phone" type="text" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Company<span className="red">*</span></label>
            <input class="input" name="user_company" type="text" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Message<span className="red">*</span></label>
            <textarea
              class="input--message"
              name="message"
              type="text"
              required
            ></textarea>
          </div>
          <button id="contact__submit" class="form__submit">
            Submit
          </button>
        </div>
        <div className="contact__right">
          <h2>Points of Contact</h2>
          <div className="contact__poc">
            <h3>United States</h3>
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
            <h3>General Contact</h3>
            <p className="email">info@canamimaging.com</p>
            <h3>Parts</h3>
            <p className="email">parts@canamimaging.com</p>
            <h3>Supplies</h3>
            <p className="email">supplies@canamimaging.com</p>
            <h3>Technical Support</h3>
            <p className="email">tech@canamimaging.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
