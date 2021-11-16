import React from "react";
import "./styles/HomeScreen.css";
import Header from "../components/Header";
import FeaturedBook from "../components/FeaturedBook";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import FanImagesComp from "../components/FanImagesComp";

function HomeScreen({ featuredBooks, onAddToCart }) {
  return (
    <div className="homeScreen">
      <Header />
      <Quote />

      <FeaturedBook featuredBooks={featuredBooks} onAddToCart={onAddToCart} />

      <div className="youtube-embed-cont">
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/1ArpIlC7B4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
      </div>

      <FanImagesComp />
    </div>
  );
}

export default HomeScreen;
