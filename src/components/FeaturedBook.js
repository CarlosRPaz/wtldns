import React from "react";
import "./styles/FeaturedBook.css";
import FeaturedBookComp from "./FeaturedBookComp";

function FeaturedBook({ featuredBooks, onAddToCart }) {
  return (
    <div className="featuredBook">
      <div className="featuredBook__sectionTitle">Featured Book</div>
      {featuredBooks.map(featuredBook => (
        <FeaturedBookComp
          featuredBook={featuredBook}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default FeaturedBook;
