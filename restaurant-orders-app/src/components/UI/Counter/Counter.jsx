import React, { useEffect, useRef } from "react";
import classes from "./Counter.module.css";

const Counter = ({ value, onChange, ...props }) => {
  const validate = (v) => {
    let num = Number(v);

    if (num === "NaN") {
      return;
    }
    if (!Number.isInteger(num)) {
      return;
    }
    if (num <= 0) {
      onChange(0);
      return;
    }
    if (num > 0 && num < 1000) {
      onChange(num);
      return;
    }
  };

  return (
    <div {...props}>
      <div style={{ display: "flex" }}>
        <div
          className={classes.body}
          style={{ outline: value === 0 ? "1px solid #df0000" : "0px" }}
        >
          <button onClick={() => validate(value === 1 ? value : value - 1)}>
            -
          </button>
          <input value={value} onChange={(e) => validate(e.target.value)} />
          <button onClick={() => validate(value + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
