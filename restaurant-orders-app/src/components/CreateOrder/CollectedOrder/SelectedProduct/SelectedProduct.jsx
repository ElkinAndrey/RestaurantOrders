import { React, useState } from "react";
import Counter from "../../../UI/Counter/Counter";
import classes from "./SelectedProduct.module.css";

const SelectedProduct = ({ product, setQuantity, ...props }) => {
  return (
    <div className={classes.body}>
      <div className={classes.information}>
        <div>
          <div style={{ marginBottom: "5px" }}>{product.product.productName}</div>
          <div style={{display: "flex", }}>
            <Counter
              value={product.quantity}
              onChange={(e) => {setQuantity(product.product.productId, e)}}
              style={{marginRight: "10px"}}
            />
            <div>{product.product.productPrice * product.quantity}</div>
          </div>
        </div>
      </div>
      <div className={classes.images}>
        <button className={classes.image}>
          <img
            src="./assets/img/trash.png"
            alt={"123"}
            style={{ height: "20px", width: "20px", pointerEvents: "none" }}
          />
        </button>
      </div>
    </div>
  );
};

export default SelectedProduct;
