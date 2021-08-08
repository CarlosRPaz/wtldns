import React from "react";
import "./styles/CartItem.css";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

function CartItem({ book, handleUpdateCartQty }) {
  return (
    <div className="cartItem">
      <div
        alt=""
        className="cartItem__img"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${book.media.source})`
        }}
      />
      <div className="cartItem__info">
        <h3 className="cartItem__info-title">{book.name}</h3>
        <p className="cartItem__info-author">By Jonathan Santa Maria</p>
        <p className="cartItem__info-price">
          {book.price.formatted_with_symbol}
        </p>
        <div className="cartItem__buttons">
          <div className="cartItem__amount">
            <button
              className="cartItem__amountButton"
              onClick={() => handleUpdateCartQty(book.id, book.quantity - 1)}
            >
              <RemoveIcon className="cartItem__AddSubIcons" />
            </button>
            <p className="cartItem__amountNum">{book.quantity}</p>
            <button
              className="cartItem__amountButton"
              onClick={() => handleUpdateCartQty(book.id, book.quantity + 1)}
            >
              <AddIcon className="cartItem__AddSubIcons" />
            </button>
          </div>

          <button className="cartItem__removeButton">
            <DeleteIcon className="cartItem__removeIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
