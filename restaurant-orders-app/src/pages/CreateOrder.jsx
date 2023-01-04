import React from "react";
import OrderCharacteristics from "../components/CreateOrder/OrderCharacteristics/OrderCharacteristics";

const CreateOrder = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{background: "red", display: "inline-block"}}>
        <OrderCharacteristics />
      </div>
    </div>
  );
};

export default CreateOrder;
