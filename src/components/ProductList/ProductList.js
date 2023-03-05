import React from "react";
import { Product } from "../Product/Product.js";
import "./ProductList.css";

export const ProductList = (props) => {
  return (
    <div className="products-list">
      {props.products.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          src={item.image}
        />
      ))}
    </div>
  );
};
