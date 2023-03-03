import React from "react";
import CartItem from "../CartItem";
import "./Cart.css";

export default function Cart(props) {
  const cart = props.cartProducts.map((item) => (
    <CartItem key={item.id} title={item.title} />
  ));
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart}
    </div>
  );
}
