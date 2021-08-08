import React from "react";
import "./styles/Footer.css";
import grab from "../img/grab.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import AmazonIcon from "../img/amazonIcon.svg";

import Logo from "./../img/logo1.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={Logo} alt="" className="footer__logo" />
        <div className="footer__columns">
          <div className="footer__column">
            <div className="footer__label">Links</div>
            <Link to="/about" className="footer__link">
              About JSM
            </Link>
            <Link to="/contact" className="footer__link">
              Contact Us
            </Link>
          </div>
          <div className="footer__column">
            <div className="footer__label">Follow Us</div>
            <div className="footer__logo-cont">
              <a
                href="https://www.instagram.com/tsunamijsm/"
                target="_blank"
                rel="noreferrer"
                className="footer__LogoLink"
              >
                <InstagramIcon className="footer__IGLogo grow" />
              </a>
              <a
                href="https://www.amazon.com/When-Light-Does-Not-Shine-ebook/dp/B09BG7W8WK"
                target="_blank"
                rel="noreferrer"
                className="footer__LogoLink"
              >
                <img
                  src={AmazonIcon}
                  alt="Amazon Icon"
                  className="footer__ALogo grow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
