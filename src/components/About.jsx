import React from "react";
import "../css/about-styles.css";
import rabbit from "../images/rabbit.jpg";
import testimonial1 from "../images/testimonial-1.jpg";

export default function About() {
  return (
    <div className="about-wrapper">
      <a href="#about-text-container-skip" id="skip-link" tabIndex={1}>
        Skip to main content
      </a>
      <div className="about-container">
        <div>
          <img
            src={rabbit}
            alt="rabbit"
            className="about-image-container"
            height={500}
            width={350}
          />
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
          <br />
          <p>
            At our pet care agency, we believe that every animal deserves the
            best possible care. Contact us today to learn more about our
            services and how we can help you give your pet the love and
            attention they deserve!
          </p>
        </div>
      </div>

      <div className="about-tests">
        <div className="about-test">
          <div className="about-test-text">
            <p>Testimonials</p>
            <h1>What pet lovers say about us</h1>
          </div>
        </div>
        <div className="about-test-cards">
          {/* {first card} */}
          <div className="about-test-card">
            <div>
              <img
                src={testimonial1}
                width={150}
                alt="testimonial1"
                className="testimonial-img"
              />
            </div>
            <div className="about-testimonial-text-wrapper">
              <p>18 APRIL 2021</p>
              <h3>Best pet care agency</h3>
              <p>
                Always reliable, personal service. I never have to worry about
                anything.
              </p>

              <p>
                <span>
                  <bold>-John Doe</bold>
                </span>
              </p>
            </div>
          </div>
          {/* {second card} */}
          <div className="about-test-card">
            {/* <div>
              <img
                src={testimonial1}
                width={150}
                alt="testimonial1"
                className="testimonial-img"
              />
            </div> */}
            <div className="about-testimonial-text-wrapper">
              <p>10 August 2021</p>
              <h3>Never Disappointed!</h3>
              <p>
                The Services are super conveninent and allows me to feel
                comfortable and confident.{" "}
              </p>

              <p>
                <span>-Meghan</span>
              </p>
            </div>
          </div>
          {/* {third card} */}
          <div className="about-test-card">
            <div>
              <img
                src={testimonial1}
                width={150}
                alt="testimonial1"
                className="testimonial-img"
              />
            </div>
            <div className="about-testimonial-text-wrapper">
              <p>8 July 2022</p>
              <h3>Professional Pet Care Services</h3>
              <p>
              Trustworthy, friendly, and top-notch care for your furry friends while you're away.
              </p>

              <p>
                <span>
                  <bold>-Sally</bold>
                </span>
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
