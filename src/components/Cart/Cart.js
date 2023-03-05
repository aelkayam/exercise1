import React, { useContext } from "react";
import { CartItem } from "../CartItem/CartItem";
import { ShopContext } from "../../contexts/ShopContext";
import "./Cart.css";

export const Cart = () => {
  const { productsList, cartItems } = useContext(ShopContext);
  return (
    <div className="cart-items">
      {productsList.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              src={product.image}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
