import React from "react";
import "../css/services-styles.css";
import check from "../images/check.svg";
import logo from "../images/dog.jpg";
import awards from "../images/awards.svg";
import profile from "../images/profile.svg";
import boy from "../images/boy.svg";
import shield from "../images/shield.svg";
import dogBluebg from "../images/dog-blue-bg.jpg";
import petgrooming from "../images/pet-grooming.jpg";
import Accordian from "./Accordian";

export default function Services() {
  return (
    <div className="services-wrapper">
       <a href="#services-card-skip" id="skip-link" tabIndex={1}>
        Skip to main content
      </a>
      <div className="services-container">
        <div className="services-heading">
          <h1>Our Services</h1>
          <p>
            As a team of experienced pet owners and lovers, <br /> we really get
            to know yo u and your pets.
          </p>
          <p>
            <img src={check} alt="check-arrow" />
            Treatment for heart related diseases.
          </p>
          <p>
            <img src={check} alt="check-arrow" />
            Medical treatment for disorders.
          </p>
          <p>
            <img src={check} alt="check-arrow" />
            Broken bone treatment.
          </p>
        </div>

        <div className="services-logo-image">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="stats-div">
        <div className="inner-stat-div">
          <img src={awards} alt="awards" />
          <h2>85+</h2>
          <p>Awards</p>
        </div>

        <div className="inner-stat-div">
          <img src={profile} alt="awards" />
          <h2>96K</h2>
          <p>Clients</p>
        </div>

        <div className="inner-stat-div">
          <img src={boy} alt="awards" />
          <h2>60+</h2>
          <p>Employee</p>
        </div>

        <div className="inner-stat-div">
          <img src={shield} alt="awards" />
          <h2>99%</h2>
          <p>Protection</p>
        </div>
      </div>

      {/* {cards} */}

      <div className="services-cards" id="services-card-skip">
        <div className="services-card">
          <div className="card-text-block">
            <h1>
              Your furry friend is <br />
              in safe hands
            </h1>
            <p>
              At our pet care service, we understand that your furry friend is{" "}
              <br />a beloved member of your family, and we strive to provide{" "}
              <br />a safe, comfortable, and enjoyable experience for them.
            </p>
            <a href="#" className="services-read-more-btn">
              Read More
            </a>
          </div>
          <div className="card-image-block">
            <img src={dogBluebg} alt="dog-blue-bg" height={300} />
          </div>
        </div>
      </div>

      {/* {our services card} */}
      <div className="services-cards-div">
        {/* {first card} */}
        <div className="card-div-service">
          <img src={petgrooming} alt="pet-grooming" height={100} className="card-div-img"/>
          <div className="card-div-text">
            <h4>Pet Grooming</h4>
            <p>
              Pet grooming involves taking care of a pet's hygiene and
              appearance. This can include bathing, trimming nails, cleaning
              ears, and brushing or shaving fur.
            </p>
          </div>
        </div>
        {/* {second card} */}
        <div className="card-div-service">
          <img src={petgrooming} alt="pet-grooming" height={100} className="card-div-img"/>
          <div className="card-div-text">
            <h4>Pet Sitting</h4>
            <p>
            Pet sitting involves having a professional caregiver visit your home to feed, water, and play with your pet while you are away.
            </p>
          </div>
        </div>
        {/* {third card} */}
        <div className="card-div-service">
          <img src={petgrooming} alt="pet-grooming" height={100} className="card-div-img"/>
          <div className="card-div-text">
            <h4>Dog walking</h4>
            <p>
            Dog walking involves taking a dog on a walk or run to give them exercise and mental stimulation. 
            </p>
          </div>
        </div>
         {/* {fourth card} */}
         <div className="card-div-service">
          <img src={petgrooming} alt="pet-grooming" height={100} className="card-div-img"/>
          <div className="card-div-text">
            <h4>Pet boarding</h4>
            <p>
            Pet boarding involves leaving your pet in a facility where they can receive care, attention, and supervision while you are away.             </p>
          </div>
        </div>

         {/* {fifth card} */}
         <div className="card-div-service">
          <img src={petgrooming} alt="pet-grooming" height={100} className="card-div-img"/>
          <div className="card-div-text">
            <h4>Pet daycare</h4>
            <p>
            Pet daycare is similar to pet boarding, but your pet stays in a facility during the day and returns home with you at night            </p>
          </div>
        </div>

         {/* {sixth card} */}
         <div className="card-div-service">
          <img src={petgrooming} alt="pet-grooming" height={100} className="card-div-img"/>
          <div className="card-div-text">
            <h4>Pet supply delivery</h4>
            <p>
            Some businesses offer delivery of pet food, toys, and other supplies to your home.            </p>
          </div>
        </div>


      </div>
      <div>
        <h1 className="services-accordian-heading">FAQs</h1>
      </div>
      <div className="services-accordians">
      <Accordian title="What kind of services does the Set Services app offer?" content="The Set Services app offers a variety of services including house cleaning, lawn care, handyman services, pet care, and more." />
      <Accordian title="How do I book a service?" content="To book a service, simply click on 'Book Now', and select the service you need. Then, choose a date and time that works for you, and confirm your booking." />
      <Accordian title="Are the service providers on the app screened and insured?" content="Yes, all service providers on the Set Services app are carefully screened and insured to ensure that they are qualified and trustworthy." />
      </div>
    </div>
  );
}
