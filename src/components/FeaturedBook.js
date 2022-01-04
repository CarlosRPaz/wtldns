import React from "react";
import "./styles/FeaturedBook.css";
import FeaturedBookComp from "./FeaturedBookComp";

function FeaturedBook({featBookData, featuredBooks, onAddToCart}) {

  if(!featBookData) {
    return null;
  }

  return (
    <div className="featuredBook">
      <div className="featuredBook__sectionTitle">{featBookData.title}</div>
      {featBookData &&
        <FeaturedBookComp
          key={featBookData.bookTitle}
          featBookData={featBookData}
          onAddToCart={onAddToCart}
        />
      }
    </div>
  );
}

export default FeaturedBook;
