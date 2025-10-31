import React from "react";
import emptyCart from "../assets/cart-empty.png";
import fullCart from "../assets/cart-full.png";

export default function NavBar({ username, cartItemCount }) {
  let cartPic;

  if (cartItemCount > 0) {
    cartPic = fullCart;
  } else {
    cartPic = emptyCart;
  }

  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <p>Welcome, {username}!</p>
      </div>

      <div className="NavDiv NavTitle">
        <h1>Grocery Store</h1>
      </div>

      <div className="NavDiv NavCart">
        <img src={cartPic} alt="Cart Icon" className="logo" />
      </div>
    </nav>
  );
}
