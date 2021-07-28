import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ buttonName, handleClick, argument }) => {
  return (
    <button className="custom-button" onClick={() => handleClick(argument)}>
      {buttonName}
    </button>
  );
};

export default CustomButton;
