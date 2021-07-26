import React from "react";
import "./custom-order-list.styles.css";

const CustomOrderList = ({ items }) => (
  <ol>
    {items.map((item) => (
      <li key={item}>{item.referencia}</li>
    ))}
  </ol>
);

export default CustomOrderList;
