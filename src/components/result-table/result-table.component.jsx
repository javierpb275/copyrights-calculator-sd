import React from "react";
import "./result-table.styles.css";

const ResultTable = ({ sales }) => {
  return (
    <div className="result-table">
      <h2 className="result-table-title">RESULT TABLE</h2>
      {sales.map((sale, i) => (
        <p>{sale.quantity}</p>
      ))}
    </div>
  );
};

export default ResultTable;
