import React from "react";
import "./styles/Quote.css";

function Quote({headingData}) {

  if(!headingData) {
    return null;
  }

  return (
    <div className="quote">
      <p className="quote__lead">
        {headingData.heading}
      </p>
      <p className="quote__p">
        {headingData.paragraph}
      </p>
    </div>
  );
}

export default Quote;
