import React, { useState, useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import "./Product.css";

export const Product = (props) => {
  const [counter, setCounter] = useState(0);
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="product-card" key={props.key}>
      <div className="product-image">
        <img src={props.src} alt={props.description} width="80" />
      </div>

      <h5>{props.title}</h5>
      <h6>price: {props.price}</h6>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <button
        onClick={() => (counter > 0 ? setCounter(counter - 1) : setCounter(0))}
      >
        -
      </button>
      <button onClick={() => addToCart(props)}>ADD TO CART</button>
    </div>
  );
};
