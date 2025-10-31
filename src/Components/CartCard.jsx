import React from 'react';
import products from '../data/products';
 
export default function CartCard({
  id,
  product,
  quantity,
  currentPrice,
  image,
  handleRemoveFromCart,
}) {
  return (
    
    <div className="CartCard">
      <div className="CartCardInfo">
        <img 
        src={image}
          alt={products}
          style={{ width: "45px", height: "45px"}}
        />
        <h4>{product}</h4>
        <p>Qty: {quantity}</p>
        <p>${currentPrice.toFixed(2)} each</p>
        <p>Total: ${(quantity * currentPrice).toFixed(2)}</p>
 
      </div>
      <button
        className="RemoveButton"
        onClick={() => {
          handleRemoveFromCart({ id, product, quantity, currentPrice });
        }}
      >
        Remove
      </button>
    </div>
  );
}
 