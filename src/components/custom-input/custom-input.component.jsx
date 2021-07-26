import React from "react";
import "./custom-input.styles.css";

const CustomInput = ({ inputType, inputPlaceholder, inputName }) => {
  return (
    <input
      className="custom-input"
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
    />
  );
};

export default CustomInput;
