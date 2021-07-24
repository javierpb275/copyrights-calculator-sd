import React from "react";
import "./result.styles.css";
import ResultTable from "../../components/result-table/result-table.component";
import sales from '../../mock-api/sales';

const Result = () => (
  <div className="result-page">
    <h2 className="result-page-title">RESULTADO:</h2>
    <ResultTable sales={sales}/>
  </div>
);

export default Result;
