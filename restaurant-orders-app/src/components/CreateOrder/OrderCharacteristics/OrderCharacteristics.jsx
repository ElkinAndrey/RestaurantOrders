import React, { useState } from "react";
import InputWithIcon from "../../UI/InputWithIcon/InputWithIcon";
import Select from "../../UI/Select/Select";
import classes from "./OrderCharacteristics.module.css"

const OrderCharacteristics = () => {
  let [numder, setNumber] = useState(12432);
  let [price, setPrice] = useState(150);
  let [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className={classes.body}>
      <InputWithIcon
        id="1"
        value={numder}
        onChange={(e) => setNumber(e.target.value)}
        style={{ color: "#c0c0be" }}
        icon="№"
        label="Способ оплаты"
        labelSize="12px"
        background="#ffffff"
        readOnly={true}
        placeholder="1234"
        margin="0px 12px 20px 12px"
      />
      <InputWithIcon
        id="2"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ color: "#c0c0be" }}
        icon="₽"
        label="Стоимость"
        labelSize="12px"
        background="#ffffff"
        readOnly={true}
        placeholder="150"
        margin="0px 12px 20px 12px"
      />
      <Select
        options={[
          { name: "Наличные", value: "cash" },
          { name: "По карте", value: "card" },
          { name: "В рассручку", value: "installment" },
        ]}
        startName="Наличные"
        value={paymentMethod}
        onChange={setPaymentMethod}
        margin="0px 12px 20px 12px"
      />
    </div>
  );
};

export default OrderCharacteristics;
