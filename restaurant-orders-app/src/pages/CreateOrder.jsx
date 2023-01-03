import React, { useState } from "react";
import InputWithIcon from "../components/UI/InputWithIcon/InputWithIcon";

const CreateOrder = () => {
  let [numder, setNumber] = useState(12432);
  let [price, setPrice] = useState(150);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
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
    </div>
  );
};

export default CreateOrder;
