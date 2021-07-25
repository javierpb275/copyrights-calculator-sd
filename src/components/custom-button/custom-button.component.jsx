import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ buttonName }) => {
  return <button className="custom-button">{buttonName}</button>;
};

export default CustomButton;
