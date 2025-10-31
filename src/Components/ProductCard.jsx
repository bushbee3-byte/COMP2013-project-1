
 
export default function ProductCard({
  productName,
  brand,
  image,
  price,
  productQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  return (
    <div className="ProductCard">
      <img src={image} alt={productName} />
      <h3>{productName}</h3>
      <p>{brand}</p>
      
     
      <div className="counter-container">
        <button
        onClick={() => handleRemoveQuantity(productQuantity.id)}
        >
          -
        </button>
        
       <button
         onClick={() => handleAddToQuantity(productQuantity.id)}
        >
          +
        </button>
      </div>


      <p>{price}</p>
     
      <button onClick={() => handleAddToCart(productQuantity.id)}>
        Add to Cart
      </button>
    </div>
  );
}
 