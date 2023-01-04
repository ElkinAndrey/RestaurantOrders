import React from "react";
import CollectedOrder from "../components/CreateOrder/CollectedOrder/CollectedOrder";
import OrderCharacteristics from "../components/CreateOrder/OrderCharacteristics/OrderCharacteristics";
import ProductList from "../components/CreateOrder/ProductList/ProductList";

const CreateOrder = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "inline-block" }}>
        <OrderCharacteristics />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ProductList />
          <CollectedOrder />
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
