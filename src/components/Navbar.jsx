import React, { useState } from "react";
import hamburger from "../images/hamburger.svg";
import close from "../images/close.svg";
import logo from "../images/Pet-Care.png";
import { Button } from "./Button";
import "../css/navbar-styles.css";
import { useEffect } from "react";

function Navbar(props) {
  const { activePage, setActivePage } = props;
  const [hamburgerClick, setHamburgerClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleHamburgerClick = () => {
    setHamburgerClick(!hamburgerClick);
  };

  const closeMobileMenu = () => {
    setHamburgerClick(false);
  };

  const handleActivePage = (page) => {
    setActivePage(page);
    closeMobileMenu();
  };

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-container">
        <div className="navbar-logo-section">
          <div className="navbar-logo">
            <img
              src={logo}
              alt="logo"
              className="fa-logo"
              onClick={() => {
                handleActivePage("home");
              }}
            />
          </div>

          <div className="navbar-hamburger" onClick={handleHamburgerClick}>
            {hamburgerClick ? (
              <button tabIndex={2} className="hamburg-button-adjust"><img src={close} alt="hamburger" /></button>
            ) : (
              <button tabIndex={3} className="hamburg-button-adjust"><img src={hamburger} alt="hamburger" /></button>
            )}
          </div>
        </div>

        <ul className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <button className="nav-links" onClick={() => handleActivePage("home")} tabIndex={2}>
              Home
            </button>
            {activePage === "home" && <div className="active-page" />}
          </li>
          <li className="nav-item">
            <button className="nav-links" onClick={() => handleActivePage("about")} tabIndex={3}>
              About
            </button>
            {activePage === "about" && <div className="active-page" />}
          </li>

          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => handleActivePage("services")} tabIndex={4}
            >
              Services
            </button>
            {activePage === "services" && <div className="active-page" />}
          </li>

          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => handleActivePage("products")} tabIndex={5}
            >
              Products
            </button>
            {activePage === "products" && <div className="active-page" />}
          </li>

          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => handleActivePage("sign-up")} tabIndex={6}
            >
              Book&nbsp;Now
            </button>
            {activePage === "sign-up" && <div className="active-page" />}
          </li>

          {/* <li className="nav-item">
          <Button buttonStyle="btn--outline">SIGN UP</Button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
