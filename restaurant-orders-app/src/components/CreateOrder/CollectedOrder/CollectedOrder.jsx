import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./CollectedOrder.module.css";
import SelectedProduct from "./SelectedProduct/SelectedProduct";

const CollectedOrder = () => {
  let products = [
    {
      productDetailsId: 1,
      product: {
        productId: 1,
        productName: "Шаурма",
        productPrice: 220,
      },
      quantity: 1,
    },
    {
      productDetailsId: 2,
      product: {
        productId: 2,
        productName: "Курица гриль",
        productPrice: 151.33,
      },
      quantity: 2,
    },
  ];

  return (
    <div className={classes.body}>
      <div style={{ marginBottom: "5px" }}>
        <Button style={{ marginRight: "22px" }}>Создать</Button>
        <Button>Очистить</Button>
      </div>
      <div className={classes.products}>
        <div>
          {products.map((pr) => (
            <div key={pr.productDetailsId}>
              <SelectedProduct product={pr.product} quantity={pr.quantity}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectedOrder;
