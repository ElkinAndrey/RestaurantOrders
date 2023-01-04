import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RadioButton from "./UI/RadioButton/RadioButton";

const Header = () => {
  const startPath = useLocation().pathname.slice(1);
  let [checked, setChecked] = useState(
    startPath === "" ? "CreateOrder" : startPath
  ); // id выбранной radio button

  let history = useNavigate();

  const redirect = (value) => {
    setChecked(value);
    history(`/${value}`);
  };

  return (
    <div>
      <div>
        <div className="logo">Заказы в ресторане</div>
        <RadioButton
          value={checked}
          onChange={redirect}
          buttons={[
            { name: "Создать заказ", value: "CreateOrder" },
            { name: "Заказы", value: "Orders" },
          ]}
          margin="0px 20px 20px"
          position="center"
          padding="10px 30px"
          style={{ margin: "0px 0px 10px 0px" }}
        />
      </div>
    </div>
  );
};

export default Header;
