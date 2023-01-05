import React from "react";
import classes from "./InputSearch.module.css";

const InputSearch = ({
  id,
  background = "#ffffff",
  readOnly = false,
  style = {},
  margin = "0px",
  width = "100px",
  ...props
}) => {
  document.addEventListener("mousedown", (e) => {
    if (readOnly) {
      return;
    }

    const withinBoundaries = e
      .composedPath()
      .includes(document.getElementById(`${id}-myInput_input`));
    let input = document.getElementById(`${id}-myInput`);

    if (input === null) {
      return;
    }
    if (!withinBoundaries) {
      input.classList.remove(classes.input__active);
      return;
    }

    if (!input.classList.contains(classes.input__active)) {
      input.classList.add(classes.input__active);
    }
  });

  return (
    <div
      id={`${id}-myInput`}
      className={classes.input}
      style={{ background: background, margin: margin, width: width }}
    >
      <input
        id={`${id}-myInput_input`}
        style={{ background: background, ...style }}
        {...props}
        readOnly={readOnly}
        spellCheck={false}
      />
      <div id={`${id}-myInput_icon`} className={classes.icon}>
        <img
          src="./assets/img/magnifier.png"
          alt={"123"}
          style={{ height: "25px", width: "25px", pointerEvents: "none" }}
        />
      </div>
    </div>
  );
};

export default InputSearch;
