
import { useState } from "react";
import products from '../data/products';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import NavBar from './NavBar';
 
export default function GroceriesAppContainer() {
    const [productQuantity, setProductQuantity] = useState(
        products.map((prod) => {
            return {
                id: prod.id,
                purchaseQuantity: 0,
                priceOptions: [parseFloat(prod.price.replace('$', ''))],
                currentPrice: parseFloat(prod.price.replace('$', '')),
                
            };
        })
    );
 
    const [cart, setCart] = useState([]);
 
    const handleAddToQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId) {
                return { ...prod, purchaseQuantity: prod.purchaseQuantity + 1 };
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
    };
 
    const handleRemoveQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId && prod.purchaseQuantity > 0) {
                return { ...prod, purchaseQuantity: prod.purchaseQuantity - 1 };
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
    };
 
    const handleAddToCart = (productId) => {
        const productToAdd = productQuantity.find(prod => prod.id === productId);
      
        if (productToAdd && productToAdd.purchaseQuantity > 0) {
            const productData = products.find(prod => prod.id === productId);
            setCart(prevCart => {
                const existingItem = prevCart.find(item => item.id === productId);
               
                if (existingItem) {
                    return prevCart.map(item =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity + productToAdd.purchaseQuantity }
                            : item
                    );
                } else {
                    return [...prevCart, {
                        id: productId,
                        product: productData.productName,
                        quantity: productToAdd.purchaseQuantity,
                        currentPrice: productToAdd.currentPrice,
                        image: productData.image,
                    }];
                }
            });
           
            const resetQuantity = productQuantity.map((prod) => {
                if (prod.id === productId) {
                    return { ...prod, purchaseQuantity: 0 };
                }
                return prod;
            });
            setProductQuantity(resetQuantity);
        } else {
            alert("you can set quantity greater than 0 ");
        }
    };
 
    const handleRemoveFromCart = (itemToRemove) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemToRemove.id));
    };
    
    const handleEmptyCart = () => {
    setCart([]); 
};

const handleCheckout = () => {
    if (cart.length === 0) {
        alert("cart is empty!");
    } else {
        alert("Checkout successful! ");
        setCart([]); 
    }
};
 
    const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
 
    return (
        <div>
            <NavBar username="username" cartItemCount={totalCartItems} />
            <div className="GroceriesApp-Container">
                <ProductsContainer
                    data={products}
                    productQuantity={productQuantity}
                    handleAddToQuantity={handleAddToQuantity}
                    handleRemoveQuantity={handleRemoveQuantity}
                    handleAddToCart={handleAddToCart}
                />
                <CartContainer
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleCheckout ={handleCheckout}
                    handleEmptyCart={handleEmptyCart}

                />
            </div>
        </div>
    );
}
 
 
 