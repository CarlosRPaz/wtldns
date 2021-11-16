import React, { useState, useEffect } from "react";
import "./styles/AboutScreen.css";
import JSM from "./../img/author.jpg";
import Footer from "../components/Footer";

import sanityClient from "../client.js";

function AboutScreen() {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      title,
      bio, 
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then(data => setAuthorData(data))
      .catch(console.error);
  }, []);

  if (!authorData) return <div>Loading...</div>;

  if (authorData) console.log(authorData[0]);

  return (
    <div className="aboutScreen">
      <div className="aboutScreen__sectionTitle">About the Author</div>
      <div
        alt=""
        className="aboutScreen__img"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${authorData[0].image.asset.url})`,
          backgroundPosition: "center center"
        }}
      />

      <p>{authorData[0].bio[0].children[0].text}</p>
    </div>
  );
}

export default AboutScreen;
