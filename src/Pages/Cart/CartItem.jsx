import React, {useContext} from "react";
import { ShopContext } from "../../context/ShopContextProvider";

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <>
      <div className="cartItem">
        <img src={productImage} /> 
        <div className="description">
          <p>
           
            <b>{productName} </b>
          </p>
          <p>GHS{price}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)} style={{padding: '0 10px'}}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)} style={{padding: '0 10px'}}> + </button>
          </div>
        </div>
      </div>
    </>
  );
}
