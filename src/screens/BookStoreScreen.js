import React from "react";
import "./styles/BookStoreScreen.css";
import Book from "../components/Book";

function BookStoreScreen({ books }) {
  return (
    <div className="bookStoreScreen">
      <div className="bookStoreScreen__sectionTitle">Book Store</div>
      <div className="bookStoreScreen__booksCont">
        {books.map(book => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookStoreScreen;
