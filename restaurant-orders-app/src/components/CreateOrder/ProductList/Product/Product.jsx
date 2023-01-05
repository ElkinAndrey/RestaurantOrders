import React from "react";
import classes from "./Product.module.css";

const Product = ({ product, addProductInOrder, ...props }) => {
  return (
    <div className={classes.body}>
      <div className={classes.information}>
        <div>
          <div style={{ marginBottom: "5px" }}>{product.productName}</div>
          <div>{product.productPrice.toFixed(2)}</div>
        </div>
      </div>
      <div className={classes.images} onClick={() => addProductInOrder(product)}>
        <button className={classes.image}>
          <img
            src="./assets/img/racket.png"
            alt={"123"}
            style={{ height: "20px", width: "20px", pointerEvents: "none" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Product;
