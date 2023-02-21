import React from "react";
import Product from "./Product";

export default function Cart(props) {
  const cart = props.cartProducts.map((item) => (
    <Product key={item.id} title={item.title} price={item.price} />
  ));
  return <div className="cart">{cart}</div>;
}
