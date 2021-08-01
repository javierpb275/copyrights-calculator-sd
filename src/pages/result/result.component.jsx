import React, { Component } from "react";
import "./result.styles.scss";
import ResultTable from "../../components/result-table/result-table.component";

class Result extends Component {
  render() {
    return (
      <div className="result-page">
        <ResultTable />
      </div>
    );
  }
}

export default Result;
