import React from "react";
import "./styles/ContactScreen.css";
import Footer from "./../components/Footer";

import emailjs from "emailjs-com";

function ContactScreen() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vgtro1o",
        "template_hbhwsas",
        e.target,
        "user_djbPn8xNPRsiLmr3d2BMs"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();

    alert("Your message has been successfully sent to Jonathan Santa Maria.");
  }
  return (
    <div className="contactScreen">
      <h1>Contact Us</h1>
      <p className="contactScreen__p">
        Please contact me with any questions or concerns. If the reason you are
        contacting us pertains to an order, please include your order reference
        code in your message. Thank you!
      </p>
      <form onSubmit={sendEmail}>
        <div className="form__element">
          <label htmlFor="name">Name</label>
          <input
            className="inputName"
            type="text"
            placeholder="Enter your name here"
            name="from_name"
            required
          />
        </div>
        <div className="form__element">
          <label htmlFor="email">Email</label>
          <input
            className="inputEmail"
            type="email"
            placeholder="Enter your email address here"
            name="email"
            required
          />
        </div>
        <div className="form__element">
          <label htmlFor="message">Message</label>
          <textarea
            className="inputMessage"
            type="text"
            placeholder="Enter your message here"
            name="message"
            cols="30"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="form__submitButton"
          value="Send Message"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactScreen;
