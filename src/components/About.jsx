import React from "react";
import "../css/about-styles.css";
import rabbit from "../images/rabbit.jpg";

export default function About() {
  return (
    <div className="about-wrapper">
       <a href="#about-text-container-skip" id="skip-link" tabIndex={1}>
        Skip to main content
      </a>
      <div className="about-container">

      <div >
          <img src={rabbit} alt="rabbit" className="about-image-container" height={500} width={350}/>
        </div>

        <div className="about-text-container" id="about-text-container-skip">
          {/* <h5 className='about-heading'>About </h5>
        <h5>us</h5> */}
          <h5>
            <span>About</span> Us
          </h5>
          <h1>Best Agency for your pet</h1>
          <p>
            Our experienced team of professionals is dedicated to providing
            exceptional care to every animal that comes through our doors. From
            grooming and training to veterinary care and boarding, we offer a
            wide range of services to ensure that your pet stays healthy, happy,
            and well-cared for.
          </p>
          <br/>
          <p>At our pet care agency, we believe that every animal deserves the best possible care. Contact us today to learn more about our services and how we can help you give your pet the love and attention they deserve!</p>
        </div>

        
      </div>

        <div className="about-workers">
          <div className="about-worker">
            <div className="about-worker-text">
              <h1>Meet our Professional Trainers </h1>
            </div>
            </div>

        </div>




    </div>
  );
}
