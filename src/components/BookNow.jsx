

import React, { useState } from "react";
import "../css/BookNow-styles.css";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [otherService, setOtherService] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Validating First Name
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    } else if (firstName.length < 2) {
      errors.firstName = "First Name must be at least 2 characters long";
    }

    // Validating Last Name
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    } else if (lastName.length < 2) {
      errors.lastName = "Last Name must be at least 2 characters long";
    }

    // Validating Email
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email";
    }

    // Validating Home Address
    if (!homeAddress.trim()) {
      errors.homeAddress = "Home Address is required";
    } else if (homeAddress.length < 5) {
      errors.homeAddress = "Home Address must be at least 5 characters long";
    }

    // Validating Phone Number
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    // Validating Schedule Date
    if (!scheduleDate) {
      errors.scheduleDate = "Schedule Date is required";
    } else if (new Date(scheduleDate) < new Date()) {
      console.log(new Date(scheduleDate));
      console.log(new Date());
      errors.scheduleDate = "Schedule Date must be in the future";
    }

    // Validating Schedule Time
    if (!scheduleTime) {
      errors.scheduleTime = "Schedule Time is required";
    }

    // Validating Service Needed
    if (serviceNeeded==="") {
      errors.serviceNeeded = "Service Needed is required";
      console.log(serviceNeeded);
    } else if (serviceNeeded === "Other" && !otherService.trim()) {
      errors.otherService = "Please specify the other service";
    }

    if (Object.keys(errors).length === 0) {
      console.log("No errors");
      setIsSubmitted(true);
      setErrors({})
    } else {
      setErrors(errors);
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <a href="#form-group-skip" id="skip-link" tabIndex={1}>
        Skip to main content
      </a>
        <div className="form-group" id="form-group-skip">

          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}

          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}

          <label htmlFor="homeAddress">Home Address</label>
          <input
            type="text"
            className={`form-control ${errors.homeAddress ? "is-invalid" : ""}`}
            id="homeAddress"
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
          />
          {errors.homeAddress && (
            <div className="invalid-feedback">{errors.homeAddress}</div>
          )}

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <div className="invalid-feedback">{errors.phoneNumber}</div>
          )}

          <label for="scheduleDate">Schedule Date</label>
          <input
            type="date"
            className={`form-control ${errors.scheduleDate ? "is-invalid" : ""}`}
            id="scheduleDate"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
          {errors.scheduleDate && (
            <div className="invalid-feedback">{errors.scheduleDate}</div>
          )}

          <label htmlFor="scheduleTime">Schedule Time</label>
          <input
            type="time"
            className={`form-control ${errors.scheduleTime ? "is-invalid" : ""}`}
            id="scheduleTime"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />
          {errors.scheduleTime && (
            <div className="invalid-feedback">{errors.scheduleTime}</div>
          )}

          <label htmlFor="serviceNeeded">Service Needed</label>
          <select
            className={`form-control ${errors.serviceNeeded ? "is-invalid" : ""}`}
            id="serviceNeeded"
            value={serviceNeeded}
            onChange={(e) => setServiceNeeded(e.target.value)}
          >
            
            <option value="">Select a service</option>
            <option value="grooming">Pet grooming</option>
            <option value="sitting">Pet sitting</option>
            <option value="walking">Dog walking</option>
            <option value="boarding">Pet boarding</option>
            <option value="training">Pet training</option>
            <option value="photography">Pet photography</option>
            <option value="food">Pet food</option>
            <option value="supplies">Pet supplies</option>
            <option value="insurance">Pet insurance</option>
            <option value="photography">Pet photography</option>
            <option value="transport">Pet transport</option>
            <option value="Other">Other</option>
          </select>
          {errors.serviceNeeded && (
            <div className="invalid-feedback">{errors.serviceNeeded}</div>
          )}

          {serviceNeeded === "Other" && (
            <div className="other-form-group">
              <label htmlFor="otherService">Other Service</label>
              <input

                type="text"
                className={`form-control ${errors.otherService ? "is-invalid" : ""}`}
                id="otherService"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
              />
              {errors.otherService && (
                <div className="invalid-feedback">{errors.otherService}</div>
              )}
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
                {isSubmitted && (<div>Thank you for submitting the form!</div>)}
        </div>
      </form>
    </div>
  );
};

           
