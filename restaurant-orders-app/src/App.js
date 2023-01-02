import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import RadioButton from "./components/UI/RadioButton/RadioButton";

function App() {
  let [checked, setChecked] = useState("CreateOrder"); // id выбранной radio button
  
  return (
    <div>
      <div className="logo">Заказы в ресторане</div>
      <RadioButton
        value={checked}
        onChange={setChecked}
        buttons={[
          { name: "Создать заказ", value: "CreateOrder" },
          { name: "Заказы", value: "Orders" },
        ]}
        margin="0px 20px 20px"
        position="center"
        padding="10px 30px"
        style={{ margin: "0px 0px 10px 0px" }}
      />
      <div>{checked}</div>
    </div>
  );
}

export default App;
