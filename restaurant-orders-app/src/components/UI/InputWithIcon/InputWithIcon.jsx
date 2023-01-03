import React from "react";
import classes from "./InputWithIcon.module.css";

const InputWithIcon = ({
  id,
  value,
  onChange,
  label = "",
  icon = "",
  labelSize = "12px",
  background = "#ffffff",
  readOnly = false,
  style={},
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
    let label = document.getElementById(`${id}-myInput_label`);

    if (!withinBoundaries) {
      input.classList.remove(classes.input__active);
      label.classList.remove(classes.input__label__active);
      return;
    }

    if (!input.classList.contains(classes.input__active)) {
      input.classList.add(classes.input__active);
    }

    if (!label.classList.contains(classes.input__label__active)) {
      label.classList.add(classes.input__label__active);
    }
  });

  return (
    <div
      id={`${id}-myInput`}
      className={classes.input}
      style={{ background: background }}
    >
      <div
        id={`${id}-myInput_label`}
        className={classes.input__label}
        style={{
          background: background,
          borderLeft: `4px solid ${background}`,
          borderRight: `4px solid ${background}`,
          fontSize: labelSize,
          top: `calc(-${labelSize}/2)`,
        }}
      >
        {label}
      </div>
      <div id={`${id}-myInput_icon`} className={classes.icon}>
        {icon}
      </div>
      <input
        id={`${id}-myInput_input`}
        style={{ background: background, ...style }}
        {...props}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export default InputWithIcon;
