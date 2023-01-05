import React from "react";
import classes from "./ProductInOrder.module.css";

export const ProductInOrder = ({ product }) => {
  return (
    <div className={classes.body}>
      <div className={classes.name}>{product.product.productName}</div>
      <div className={classes.quantity}>{product.quantity}</div>
      <div className={classes.price}>{product.product.productPrice.toFixed(2)}</div>
    </div>
  );
};
