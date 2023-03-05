import React from "react";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";

export const Cart = (props) => {
  return (
    <div className="cart">
      {props.cartProducts.map((item) => (
        <CartItem key={item.id} title={item.title} />
      ))}
    </div>
  );
};
