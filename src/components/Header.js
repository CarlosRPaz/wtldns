import React from "react";
import "./styles/Header.css";
import header2 from "./../img/header2.jpg";

import art1 from "./../img/compr_images/art1.PNG";
import art2 from "./../img/compr_images/art2.JPG";
import art3 from "./../img/compr_images/art3.JPG";
import art4 from "./../img/compr_images/art4.JPG";
import art5 from "./../img/compr_images/art5.JPG";
import art6 from "./../img/compr_images/art6.JPG";
import art7 from "./../img/compr_images/art7.JPG";
import art8 from "./../img/compr_images/art8.JPEG";

import Logo from "./../img/logo1.png";

function Header() {
  return (
    <div className="header">
      <div
        alt=""
        className="header__img hide__sub"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art1})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__img"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art6})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__img hide"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art3})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__img hide"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art8})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__img"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art5})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__img hide"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art2})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__img"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art7})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__img"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${art4})`,
          backgroundPosition: "center center"
        }}
      />
      <div
        alt=""
        className="header__logo"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${Logo})`,
          backgroundPosition: "center center"
        }}
      />
    </div>
  );
}

export default Header;
