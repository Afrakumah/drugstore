import React, {useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import './Cart.css'
import { useNavigate } from "react-router";


export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <>
      <div className="cart">
        <div>
          <h3>Items in cart</h3>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
            <div className="checkout">
        
            <p>Subtotal: GHS{totalAmount} </p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button onClick={() => navigate('/login')}>Checkout</button>
  
          </div>
  ) : (
    <h3 style={{marginTop: '4rem'}}>Your cart is empty</h3>
  )
        
        }
      
      </div>
    </>
  );
}
