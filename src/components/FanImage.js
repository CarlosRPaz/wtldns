import React from "react";
import "./styles/FanImage.css";

function FanImage({ image }) {
  return (
    <div
      alt=""
      className="fanImage"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center"
      }}
    />
  );
}

export default FanImage;
