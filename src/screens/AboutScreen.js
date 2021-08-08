import React from "react";
import "./styles/AboutScreen.css";
import JSM from "./../img/author.jpg";
import Footer from "../components/Footer";

function AboutScreen() {
  return (
    <div className="aboutScreen">
      <div className="aboutScreen__sectionTitle">About the Author</div>
      <div
        alt=""
        className="aboutScreen__img"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${JSM})`,
          backgroundPosition: "center center"
        }}
      />

      <p>
        <span>Jonathan Santa Maria</span> was a professional mixed martial
        artist. He has fought for organizations like Bellator MMA and Combate
        Americas. In his spare time, Jonathan works in the mental health field,
        assisting those in need. Jonathan lived in the house on Danby Street,
        where this book was inspired. Jonathan has found a new passion for
        writing, and he is overly excited to bring this book and his next book
        of horror poetry to the world. So, strap up your seat belt and enjoy the
        journey with the newly found writer, Johnny the Tsunami.
      </p>
    </div>
  );
}

export default AboutScreen;
