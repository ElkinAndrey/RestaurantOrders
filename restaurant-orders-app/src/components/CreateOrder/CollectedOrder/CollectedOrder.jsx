import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./CollectedOrder.module.css";

const CollectedOrder = () => {
  return (
    <div className={classes.body}>
      <div style={{marginBottom: "5px"}}>
        <Button style={{marginRight: "22px"}}>Создать</Button>
        <Button>Очистить</Button>
      </div>
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
