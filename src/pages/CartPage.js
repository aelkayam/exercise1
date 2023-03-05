import React, { useState } from "react";
import { Cart } from "../components/Cart/Cart";
import "./CartPage.css";

let defaultCartProducts = [];

export const CartPage = () => {
  const [cartProducts, setCartProducts] = useState(defaultCartProducts);

  return (
    <div className="cart-page">
      <p>
        <b>Your Cart</b>
      </p>
      <Cart cartProducts={cartProducts} />
    </div>
  );
};
