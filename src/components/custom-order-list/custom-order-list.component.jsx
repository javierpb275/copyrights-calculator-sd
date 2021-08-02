import React from "react";
import "./custom-order-list.styles.scss";
import { connect } from "react-redux";
import { clearItem } from "../../redux/product/product.actions";

const CustomOrderList = ({ items, clearItem }) => (
  <ol id="custom-order-list">
    {items.map((item) => (
      <li key={item.id}>
        {item.referencia}
        <span className="remove-item" onClick={() => clearItem(item)}>
          {" "}
          &#10006;
        </span>
      </li>
    ))}
  </ol>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CustomOrderList);
