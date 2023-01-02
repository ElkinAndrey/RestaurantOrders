import classes from "./RadioButton.module.css";

const RadioButton = ({ buttons, value, onChange, margin="0px", position="left", padding="0px", style="" }) => {
  return (
    <div style={style}>
      <div className={classes.aa} style={{justifyContent : position}}>
        {buttons.map((btn) => (
          <div key={btn.value} className={classes.form_radio_btn} style={{margin : margin}}>
            <input
              id={`radio-${btn.value}`} 
              type="radio"
              name="radio"
              value={btn.value}
              checked={btn.value === value ? true : false}
              onChange={() => onChange(btn.value)}
            />
            <label for={`radio-${btn.value}`} style={{padding : padding}}>{btn.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
