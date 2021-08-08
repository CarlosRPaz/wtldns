import React from "react";
import "./styles/HomeScreen.css";
import Header from "../components/Header";
import FeaturedBook from "../components/FeaturedBook";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

function HomeScreen({ featuredBooks, onAddToCart }) {
  return (
    <div className="homeScreen">
      <Header />
      <Quote />

      <FeaturedBook featuredBooks={featuredBooks} onAddToCart={onAddToCart} />
    </div>
  );
}

export default HomeScreen;
