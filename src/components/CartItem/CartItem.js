import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import "./CartItem.css";

export const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } =
    useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={props.src} alt={props.title}></img>
      <div className="description">
        <p>{props.title}</p>
        <p>price: ${props.price}</p>
        <div className="count-handler">
          <button
            className="control-amount-button"
            onClick={() => removeFromCart(props.id)}
          >
            -
          </button>
          <input
            value={cartItems[props.id]}
            onChange={(e) => {
              updateCartItemAmount(Number(e.target.value), props.id);
            }}
          />
          <button
            className="control-amount-button"
            onClick={() => addToCart(props.id, 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
