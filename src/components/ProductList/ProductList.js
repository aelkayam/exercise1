import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";

export default function ProductList(props) {
  const products = props.products.map((item) => (
    <Product
      key={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
      src={item.image}
    />
  ));

  return (
    <div className="products-list">
      <div className="products-header">Products List</div> {products}
    </div>
  );
}
