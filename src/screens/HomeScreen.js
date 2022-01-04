import React, {useState, useEffect} from "react";
import "./styles/HomeScreen.css";
import Header from "../components/Header";
import FeaturedBook from "../components/FeaturedBook";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import FanImagesComp from "../components/FanImagesComp";

import sanityClient from "../client.js";


function HomeScreen({featuredBooks, onAddToCart}) {

  const [youtubeData, setYoutubeData] = useState(null);
  const [headingData, setHeadingData] = useState(null);
  const [featBookData, setFeatBookData] = useState(null);

  // Grabs youtube videos from Sanity workspace
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "youtubeVideo"]{
      title, 
      videoURL,
    }`
      )
      .then(data => setYoutubeData(data))
      .catch(console.error);
  }, []);

  // Grabs Heading paragraph from Sanity workspace
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "headingParagraph"]{
      heading, 
      paragraph,
    }`
      )
      .then(data => setHeadingData(data[0]))
      .catch(console.error);
  }, []);

  // Grabs featured book from Sanity workspace
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featBook"]{
            title, 
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            },
            copiesSold,
            bookTitle,
            amazonURL,
          }`
      )
      .then(data => setFeatBookData(data[0]))
      .catch(console.error);
  }, []);

  if(featBookData) {
    console.log(featBookData);
  }

  return (
    <div className="homeScreen">
      <Header />
      <Quote headingData={headingData} />

      <FeaturedBook featBookData={featBookData} featuredBooks={featuredBooks} onAddToCart={onAddToCart} />

      {youtubeData &&
        youtubeData.map((video, index) => (
          <div key={video.videoURL}>
            <div className="youtube-embed-cont">
              <iframe className="responsive-iframe" src={video.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe> {/* If error, change className of iframe to class */}
            </div>
            <div className="youtubeVideo__sectionTitle">{video.title}</div>
          </div>
        ))}

      <FanImagesComp />
    </div>
  );
}

export default HomeScreen;
