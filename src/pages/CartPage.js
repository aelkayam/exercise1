import React from "react";
import { Cart } from "../components/Cart/Cart";
import "./CartPage.css";

export const CartPage = () => {
  return (
    <div className="cart">
      <div className="cart-title">
        <h2>Your Cart</h2>
      </div>
      <Cart />
    </div>
  );
};
