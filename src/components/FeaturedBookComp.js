import React from "react";
import "./styles/FeaturedBookComp.css";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Link } from "react-router-dom";

function FeaturedBookComp({ featuredBook, onAddToCart }) {
  return (
    <div className="featuredBookComp">
      <div
        alt=""
        className="featuredBookComp__bookCover"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${featuredBook.media.source})`,
          backgroundPosition: "center top"
        }}
      />
      <div className="featuredBookComp__info">
        <div className="featuredBookComp__booksSold">
          <div className="featuredBookComp__booksSold-iconCont">
            <MenuBookIcon className="featuredBookComp__booksSold-icon" />
          </div>
          <div className="featuredBookComp__booksSold-info">
            <div>{featuredBook.inventory.available}</div>
            <p>copies sold</p>
          </div>
        </div>
        <div className="featuredBookComp__title">{featuredBook.name}</div>
        <p dangerouslySetInnerHTML={{ __html: featuredBook.description }} />
        <a
          href="https://www.amazon.com/When-Light-Does-Not-Shine-ebook/dp/B09BG7W8WK"
          className="featuredBookComp__buyButton"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default FeaturedBookComp;
