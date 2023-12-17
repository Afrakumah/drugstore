import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import './Shop.css'

export default function Shop() {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h3>Tablets</h3>
        </div>
        <div className="products">{PRODUCTS.map((product) => (<Product data={product} />))}</div>
      </div>
    </>
  );
}