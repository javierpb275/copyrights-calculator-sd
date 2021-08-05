import React from "react";
import "./custom-input.styles.scss";

const CustomInput = ({ inputType, inputPlaceholder, inputName, handleChange, inputValue }) => {
  return (
    <input
      className="custom-input"
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      onChange={handleChange}
      value={inputValue}
    />
  );
};

export default CustomInput;
