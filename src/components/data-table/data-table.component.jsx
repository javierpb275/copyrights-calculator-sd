import React from "react";
import "./data-table.styles.css";

const DataTable = ({books}) => (
  <div className="data-table">
    <h2 className="data-table-title">DATA TABLE</h2>
    <p>{books[0].title}</p>
  </div>
);

export default DataTable;
