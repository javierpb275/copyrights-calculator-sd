import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ buttonName, handleClick }) => {
  return (
    <button className="custom-button" onClick={() => handleClick()}>
      {buttonName}
    </button>
  );
};

export default CustomButton;
