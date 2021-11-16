import React, { useState, useEffect } from "react";
import "./styles/FanImagesComp.css";
import FanImage from "../components/FanImage";

import sanityClient from "../client.js";

function FanImagesComp() {
  const [fanData, setFanData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "fanImage"]{
      title, 
      slug, 
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then(data => setFanData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="fanImagesComp">
      {fanData &&
        fanData.map((fan, index) => (
          <FanImage image={fan.mainImage.asset.url} />
        ))}
    </div>
  );
}

export default FanImagesComp;
