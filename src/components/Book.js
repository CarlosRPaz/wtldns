import React from "react";
import "./styles/Book.css";

function Book({ book }) {
  return (
    <div className="book">
      <div
        alt=""
        className="book__img"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${book.media.source})`
        }}
      />
      <h4>{book.name}</h4>
    </div>
  );
}

export default Book;
