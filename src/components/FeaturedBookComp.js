import React from "react";
import "./styles/FeaturedBookComp.css";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {Link} from "react-router-dom";

function FeaturedBookComp({featBookData, featuredBook, onAddToCart}) {

  if(!featBookData) {
    return "Loading...";
  }

  return (
    <div className="featuredBookComp">
      <div
        alt=""
        className="featuredBookComp__bookCover"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${featBookData.mainImage.asset.url})`,
          backgroundPosition: "center top"
        }}
      />
      <div className="featuredBookComp__info">
        <div className="featuredBookComp__booksSold">
          <div className="featuredBookComp__booksSold-iconCont">
            <MenuBookIcon className="featuredBookComp__booksSold-icon" />
          </div>
          <div className="featuredBookComp__booksSold-info">
            <div>{featBookData.copiesSold}</div>
            <p>copies sold</p>
          </div>
        </div>
        <div className="featuredBookComp__title">{featBookData.bookTitle}</div>
        <a
          href={featBookData.amazonURL}
          className="featuredBookComp__buyButton"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default FeaturedBookComp;
