import React, { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList/ProductList";

let defaultProducts = [];

export const ShopPage = () => {
  const [productsList, setProductsList] = useState(defaultProducts);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductsList(json.slice(0, 10));
        defaultProducts = json;
      });
  }, []);

  return (
    <div className="shop">
      <div className="shop-title">
        <h2>Shop Items</h2>
      </div>
      <div className="products">
        <ProductList products={productsList} />
      </div>
    </div>
  );
};
