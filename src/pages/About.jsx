import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">We look forward to serving you</h1>
      <div className="about__wrapper">
        <div className="about__left">
          <h2>Points of Contact</h2>
          <div className="about__poc--us">
            <h3>United States</h3>
            <p>50 Greenleaf Street Rochester</p>
            <p>New York, 14609</p>
            <p>Toll Free: 1-866-758-0007</p>
            <p>Phone: (585) 224-4033</p>
            <p>Fax: (585) 224-3999</p>
          </div>
          <div className="about__poc--can">
            <h3>Canada</h3>
            <p>7321 Victoria Park Ave Unit 3</p>
            <p>Markham ON, L3R2Z8</p>
            <p>Toll Free: 1-866-758-0007</p>
            <p>Phone: (905) 770-1118</p>
            <p>Fax: (905) 770-1119</p>
          </div>
          <div className="about__emails">
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
        <div className="about__right">
          <h2>Contact Us</h2>
          <div class="form__item">
            <label class="form__item--label">Name</label>
            <input class="input" name="user_name" type="text" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Email</label>
            <input
              class="input"
              name="user_email"
              type="email"
              required
            ></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Phone</label>
            <input class="input" name="user_email" type="text" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Company</label>
            <input class="input" name="user_email" type="text" required></input>
          </div>
          <div class="form__item">
            <label class="form__item--label">Message</label>
            <textarea
              class="input"
              name="message"
              type="text"
              required
            ></textarea>
          </div>
          <button id="contact__submit" class="form__submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
