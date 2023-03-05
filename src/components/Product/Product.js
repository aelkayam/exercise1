import React, { useState, useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import "./Product.css";

export const Product = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [counter, setCounter] = useState(0);

  const cartItemAmount = cartItems[props.id];

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.src} alt={props.description} width="80" />
      </div>
      <div className="product-description">
        <p>
          <b>{props.title}</b>
        </p>
        <p>price: {props.price}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button
          onClick={() =>
            counter > 0 ? setCounter(counter - 1) : setCounter(0)
          }
        >
          -
        </button>
        <button
          className="addToCart-button"
          onClick={() => {
            addToCart(props.id, counter);
          }}
        >
          ADD TO CART {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
