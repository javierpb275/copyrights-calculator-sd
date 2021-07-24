import React from "react";
import "./result.styles.css";
import ResultTable from "../../components/result-table/result-table.component";

const Result = () => (
  <div className="result-page">
    <h2 className="result-page-title">RESULTADO:</h2>
    <ResultTable />
  </div>
);

export default Result;
