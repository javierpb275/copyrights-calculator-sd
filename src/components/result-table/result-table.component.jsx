import React from "react";
import "./result-table.styles.css";

const ResultTable = ({sales}) => (
  <div className="result-table">
    <h2 className="result-table-title">RESULT TABLE</h2>
    <p>{sales[0].quantity}</p>
  </div>
);

export default ResultTable;
