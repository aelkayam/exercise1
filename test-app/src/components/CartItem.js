import React from "react";

export default function CartItem(props) {
  return (
    <div className="cart-item" key={props.key}>
      <h5>{props.title}</h5>
    </div>
  );
}
