import React from "react";
import "./custom-order-list.styles.scss";

const CustomOrderList = ({ items }) => (
  <ol id="custom-order-list">
    {items.map((item) => (
      <li key={item.id}>{item.referencia}</li>
    ))}
  </ol>
);

export default CustomOrderList;
