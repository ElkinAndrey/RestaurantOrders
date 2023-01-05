import React from "react";
import InputWithIcon from "../../UI/InputWithIcon/InputWithIcon";
import Select from "../../UI/Select/Select";
import classes from "./OrderCharacteristics.module.css";

const OrderCharacteristics = ({newOrder, setNewOrder}) => {
  return (
    <div className={classes.body}>
      <InputWithIcon
        id="1"
        value={newOrder.number}
        onChange={(e) => setNewOrder({...newOrder, number: e.target.value})}
        style={{ color: "#c0c0be" }}
        icon="№"
        label="Способ оплаты"
        labelSize="12px"
        background="#ffffff"
        readOnly={true}
        placeholder="Ожидание..."
        margin="0px 12px 20px 12px"
      />
      <InputWithIcon
        id="2"
        value={newOrder.products.reduce(
          (accumulator, currentValue) => accumulator + currentValue.product.productPrice * currentValue.quantity,
          0
        ).toFixed(2)}
        onChange={(e) => setNewOrder({...newOrder, price: e.target.value})}
        style={{ color: "#c0c0be" }}
        icon="₽"
        label="Стоимость"
        labelSize="12px"
        background="#ffffff"
        readOnly={true}
        placeholder="Ожидание..."
        margin="0px 12px 20px 12px"
      />
      <Select
        options={[
          { name: "Наличные", value: "Наличные" },
          { name: "По карте", value: "По карте" },
          { name: "В рассручку", value: "В рассручку" },
        ]}
        startName="Наличные"
        value={newOrder.paymentMethod}
        onChange={(e) => setNewOrder({...newOrder, paymentMethod: e})}
        margin="0px 12px 20px 12px"
      />
    </div>
  );
};

export default OrderCharacteristics;
