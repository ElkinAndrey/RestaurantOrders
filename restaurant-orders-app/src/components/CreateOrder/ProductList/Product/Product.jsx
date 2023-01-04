import React from "react";
import classes from "./Product.module.css";

const Product = ({ productName = "", productPrice = 0, ...props }) => {
  return (
    <div className={classes.body}>
      <div className={classes.information}>
        <div>
          <div style={{ marginBottom: "5px" }}>{productName}</div>
          <div>{productPrice}</div>
        </div>
      </div>
      <div className={classes.images}>
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
