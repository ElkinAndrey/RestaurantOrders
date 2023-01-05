import { React, useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./CollectedOrder.module.css";
import SelectedProduct from "./SelectedProduct/SelectedProduct";
import Service from "./../../../API/index";

const CollectedOrder = ({
  newOrder,
  setNewOrder,
  delProductInOrder,
  delAllProductInOrder,
  addNewOrder,
}) => {
  const setQuantity = (productId, newQuantity) => {
    setNewOrder({
      ...newOrder,
      products: [
        ...newOrder.products.map((p) => {
          if (p.product.productId === productId) {
            p.quantity = newQuantity;
          }
          return p;
        }),
      ],
    });
  };

  return (
    <div className={classes.body}>
      <div style={{ marginBottom: "5px" }}>
        <Button onClick={() => addNewOrder()} style={{ marginRight: "22px" }}>
          Создать
        </Button>
        <Button onClick={() => delAllProductInOrder()}>Очистить</Button>
      </div>
      <div className={classes.products}>
        <div>
          {newOrder.products.length !== 0 ? (
            <div>
              {newOrder.products.map((pr) => (
                <div key={pr.product.productId}>
                  <SelectedProduct
                    product={pr}
                    setQuantity={setQuantity}
                    delProductInOrder={delProductInOrder}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={classes.message}>
              Добавьте товары в заказ
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectedOrder;
