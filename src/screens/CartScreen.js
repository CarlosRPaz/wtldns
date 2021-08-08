import React from "react";
import "./styles/CartScreen.css";
import CartItem from "../components/CartItem";

function CartScreen({ cart, handleUpdateCartQty }) {
  if (!cart.line_items) return "Loading ... ";

  return (
    <div className="cartScreen">
      <div className="cartScreen__sectionTitle">Your Book Bag</div>

      {cart.line_items.map(item => (
        <CartItem
          key={item.id}
          book={item}
          handleUpdateCartQty={handleUpdateCartQty}
        />
      ))}
    </div>
  );
}

export default CartScreen;
