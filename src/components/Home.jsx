import React from "react";
import "../css/home-css.css";
import { Button } from "./Button";
import HeroSlider from "./HeroSlider";
import { HeroSliderData } from "./HeroSliderData";
import heroDog from "../images/hero-help-dog.jpg";
import heroDeer from "../images/hero-help-deer.jpg";
import heroGif from "../images/hero-help-giraffe.jpg";
import heroHelp from "../images/hero-help.png";

export default function Home(props) {
  const { activePage, setActivePage } = props;
  return (
    <div className="home-container">
      <a href="#services-btn-skip" id="skip-link" tabIndex={1}>
        Skip to main content
      </a>
      <div className="home-wrapper">
        <div className="text-container">
          <div className="home-heading">
            <h1>
              Care of your pets <br /> is our priority.
            </h1>
          </div>
          <div className="hero-desc">
            <p>
              {" "}
              We believe finding a reliable, professional pet sitter should{" "}
              <br />
              be easy. So we make sure every member of our Family.
            </p>
          </div>
          <div className="services-btn" id="services-btn-skip">
            <Button
              tabIndex={7}
              buttonStyle="btn--orange"
              buttonSize="btn--medium"
              onClick={() => {
                setActivePage("services");
              }}
            >
              Our Services
            </Button>
          </div>
        </div>
        <div className="image-carousel">
          <HeroSlider slides={HeroSliderData} />
        </div>
      </div>

      <div className="hero-help-section">
        <div>
          <img src={heroDog} alt="hero-help-dog" className="hero-help-img" />
        </div>

        <div className="help-text-section">
          <p>How Can we help?</p>
          <h4>
            While you are on vacation or
            <br /> at work can be stressful
          </h4>
        </div>

        <div>
          <img src={heroHelp} alt="hero-help-deer" className="hero-help-img" />
          {/* <img
            src={heroGif}
            alt="hero-help-giraffe"
            className="hero-help-img"
          /> */}
        </div>
      </div>

      <div className="home-offers-cards-wrapper">
        <h1>
          We look after your pets <br /> with our best staffs
        </h1>
        <div className="home-offers-cards">
          {/* {first card} */}
          <div className="home-offers-card">
            <div>
              <img src={heroDog} alt="home-offers-card-img" />
            </div>
            <div className="home-offers-text-wrapper">
              <h4>Safety First</h4>
              <p>Counselors certified in pet first aid and CPR put your pet's health and happiness is our first priority.</p>
            </div>
          </div>
          {/* {second card} */}
          <div className="home-offers-card">
            <div>
              <img src={heroDog} alt="home-offers-card-img" />
            </div>
            <div className="home-offers-text-wrapper">
              <h4>Spacious play yards</h4>
              <p>Our oasis offers large climate controlled play yards for optimal tail wigs.</p>
            </div>
          </div>
          {/* {third card} */}
          <div className="home-offers-card">
            <div>
              <img src={heroDog} alt="home-offers-card-img" />
            </div>
            <div className="home-offers-text-wrapper">
              <h4>Monitor your pet</h4>
              <p>Access our live webcams on your computer or mobile. Here you pet can romp or play all day long</p>
            </div>
          </div>
          {/* {fourth card} */}
          <div className="home-offers-card">
            <div>
              <img src={heroDog} alt="home-offers-card-img" />
            </div>
            <div className="home-offers-text-wrapper">
              <h4>All in one pricing</h4>
              <p>Treat your pet to all inclusive one convinent rate. Check In/Out time during camp hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
