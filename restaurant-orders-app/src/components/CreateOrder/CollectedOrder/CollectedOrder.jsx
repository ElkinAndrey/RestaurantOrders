import React from "react";
import classes from "./CollectedOrder.module.css";

const CollectedOrder = () => {
  return (
    <div className={classes.body}>
      <div className={classes.buttons}></div>
      <div className={classes.products}>
        <div>
          <div className={classes.product}>1</div>
          <div className={classes.product}>2</div>
          <div className={classes.product}>3</div>
          <div className={classes.product}>4</div>
        </div>
      </div>
    </div>
  );
};

export default CollectedOrder;
