import React from "react";
import classes from "./Order.module.css";
import { ProductInOrder } from "./../ProductInOrder/ProductInOrder";
import Service from "./../../../API/index";

const Order = ({ order, del }) => {
  return (
    <div className={classes.body}>
      <div className={classes.head}>
        <div className={classes.title} style={{ float: "left" }}>
          <label>Номер заказа</label> {order.number}
        </div>
        <button onClick={() => del(order)} className={classes.del}>
          <img
            src="./assets/img/trash.png"
            alt={"123"}
            style={{ height: "20px", width: "20px", pointerEvents: "none" }}
          />
        </button>
      </div>
      <div className={classes.line}></div>
      <div className={classes.products}>
        {order.products.map((product) => (
          <div key={product.product.productId}>
            <ProductInOrder product={product} />
          </div>
        ))}
      </div>
      <div className={classes.line}></div>
      <div className={classes.title} style={{ marginBottom: "5px" }}>
        <label>Способ оплаты</label> {order.paymentMethod}
      </div>
      <div className={classes.title}>
        <label>Общая стоимость</label>{" "}
        {order.products
          .reduce(
            (ac, value) => ac + value.product.productPrice * value.quantity,
            0
          )
          .toFixed(2)}
      </div>
    </div>
  );
};

export default Order;
