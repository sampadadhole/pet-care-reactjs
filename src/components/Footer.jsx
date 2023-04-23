import React, { useState } from "react";
import "../css/footer-styles.css";
import gmail from "../images/gmail.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import logo from "../images/Pet-Care.png";

export default function Footer(props) {
  const [subs_errors, setSubsErrors] = useState({});
  const [email_sub, setSubEmail] = useState("");
  const [isSubSubmitted, setIsSubSubmitted] = useState(false);
  const { activePage, setActivePage } = props;

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    const subs_errors = {};
    const email_sub = e.target.subscribe_email.value;

    if (!email_sub.trim()) {
      subs_errors.email_sub = "Email is required";
      console.log("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_sub)) {
      subs_errors.email_sub = "Please enter a valid email";
    }
    if (Object.keys(subs_errors).length === 0) {
      console.log("No errors");
      setIsSubSubmitted(true);
      setSubsErrors({});
    } else {
      setSubsErrors(subs_errors);
      setIsSubSubmitted(false);
    }

    console.log(email_sub);
  };

  return (
    <div className="footer-wrapper">
     
      <div className="subscribe_block">
        <form onSubmit={handleSubscribeSubmit}>
          <h2>
            Subscribe Newsletter & get
            <br /> Cat care News
          </h2>
          <label htmlFor="subscribe_email"></label>
          <input
            type="text"
            name="subscribe_email"
            className={`subscribe_email ${
              subs_errors.email_sub ? "is-invalid" : ""
            }`}
            value={email_sub}
            id="subscribe_email"
            onChange={(e) => setSubEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <button type="submit" className="subscribe_email_btn">
            Subscribe
          </button>
        </form>
        {subs_errors.email_sub && (
          <div className="invalid-feed">{subs_errors.email_sub}</div>
        )}
        {isSubSubmitted && (
          <div>Thank you for subscribing to our Newsletter!</div>
        )}
      </div>

       {/* {wave} */}
       <div class="wave-container">
        <svg
          class="css-waves"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
          
        >
          <defs>
            <path
              id="wave-pattern"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g class="animated-waves">
            <use
              href="#wave-pattern"
              x="48"
              y="0"
              fill="#FFE7E0"
            ></use>
            <use
              href="#wave-pattern"
              x="48"
              y="3"
              fill="#f6beae"
            ></use>
            <use
              href="#wave-pattern"
              x="48"
              y="5"
              fill="#faaa94"
            ></use>
            <use
              href="#wave-pattern"
              x="48"
              y="7"
              fill="#ff9274"
            ></use>
          </g>
        </svg>
      </div>

      {/* {wave} */}

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
          <p
            onClick={() => {
              setActivePage("about");
            }}
          >
            About Us
          </p>
          <p
            onClick={() => {
              setActivePage("sign-up");
            }}
          >
            Registration
          </p>
          <p
            onClick={() => {
              setActivePage("services");
            }}
          >
            FAQ
          </p>
          <p
            onClick={() => {
              setActivePage("products");
            }}
          >
            Products
          </p>
        </div>
      </div>
    </div>
  );
}
