import React from "react";
import "./custom-input.styles.scss";

const CustomInput = ({ inputType, inputPlaceholder, inputName, handleChange }) => {
  return (
    <input
      className="custom-input"
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      onChange={handleChange}
    />
  );
};

export default CustomInput;
