import React, { Component } from "react";
import "./result.styles.css";
import ResultTable from "../../components/result-table/result-table.component";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {tableData} = this.props;
    return (
      <div className="result-page">
        <h2 className="result-page-title">RESULTADO:</h2>
        <ResultTable tableData={tableData}/>
      </div>
    );
  }
}

export default Result;
