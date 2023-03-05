import React, { useState, useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import "./Product.css";

export const Product = (props) => {
  const [counter, setCounter] = useState(0);
  const { addToCart } = useContext(ProductsContext);

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
        <button className="addToCart-button" onClick={() => addToCart(props)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
