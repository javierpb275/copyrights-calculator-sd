import React from "react";
import "./custom-select-option.styles.css";

const CustomSelectOption = ({ selectName }) => {
  return (
    <select name={selectName}>
      <option value="123">123</option>
      <option value="456">456</option>
    </select>
  );
};

export default CustomSelectOption;
