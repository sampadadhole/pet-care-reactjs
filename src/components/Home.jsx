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

  const{activePage, setActivePage} = props;
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
            <Button tabIndex={7} buttonStyle="btn--orange" buttonSize="btn--medium" onClick={()=> { 
              setActivePage('services');
            }}>
              Our Services
            </Button>
          </div>
        </div>
        <div className="image-carousel">
          <HeroSlider slides={HeroSliderData} />
        </div>
      </div>

      <div className="hero-help-section"  >
        <div>
          <img src={heroDog} alt="hero-help-dog" className="hero-help-img" />
        </div>

        <div className="help-text-section">
          <p>How Can we help?</p>
          <h4>While you are on vacation or<br/> at work can be stressful</h4>
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
      
    </div>
  );
}
