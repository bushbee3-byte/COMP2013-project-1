import CartCard from "./CartCard";
import React from 'react';
import products from "../data/products";

export default function CartContainer({ cart, handleRemoveFromCart, handleCheckout, handleEmptyCart }) {
  let content;

  if (cart.length === 0) {
    content = <p>Your cart is empty.</p>;
  } else {
    content = (
      <div>
        <button onClick={handleCheckout}>Checkout</button>
        <button onClick={handleEmptyCart} > Empty Cart </button>
      </div>
    );
  }

  return (
    <div className="CartContainer">
      {cart.map((item) => (
        <CartCard
          key={item.id}
          {...item}
          image={item.image}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
       {content}
    </div>
  );
}
