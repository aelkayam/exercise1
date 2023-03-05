import React, { useContext, useEffect } from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { ShopContext } from "../contexts/ShopContext";
import "./ShopPage.css";

export const ShopPage = () => {
  const { productsList, setInitialProductsList } = useContext(ShopContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setInitialProductsList(json, 10);
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
