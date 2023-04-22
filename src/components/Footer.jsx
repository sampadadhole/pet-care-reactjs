import React from "react";
import "../css/footer-styles.css";
import gmail from "../images/gmail.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import logo from "../images/Pet-Care.png";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="subscribe_block">
        <h2>
          Subscribe Newsletter & get
          <br /> Cat care News
        </h2>
        <label htmlFor="subscribe_email"></label>
        <input
          type="text"
          name="subscribe_email"
          className="subscribe_email"
          placeholder="Enter your email"
        />
        <button className="subscribe_email_btn">Subscribe</button>
      </div>

      <div className="footer_block">
        <div className="info_block">
          <img src={logo} alt="logo" />
        </div>

        <div className="contact_us">
          <h3>Reach out to us</h3>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={gmail} alt="Gmail" />
          </a>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <p>Cats</p>
          <p>Puppy</p>
          <p>Giraffe</p>
          <p>Kitten</p>
        </div>

        <div className="help">
          <h3>Help</h3>
          <p>About Us</p>
          <p>Registration</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
