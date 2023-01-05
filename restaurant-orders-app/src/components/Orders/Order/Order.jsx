import React from "react";
import classes from "./Order.module.css";
import { ProductInOrder } from "./../ProductInOrder/ProductInOrder";

const Order = ({ order }) => {
  return (
    <div className={classes.body}>
      <div className={classes.title}>
        <label>Номер заказа</label> {order.number}
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
      <div className={classes.title} style={{marginBottom: "5px"}}>
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
