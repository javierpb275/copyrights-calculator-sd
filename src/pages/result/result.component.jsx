import React, { Component } from "react";
import "./result.styles.css";
import ResultTable from "../../components/result-table/result-table.component";
import sales from "../../mock-api/sales";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      sales: [],
    };
  }

  componentDidMount() {
    this.setState({ sales });
  }

  render() {
    const { sales } = this.state;
    return (
      <div className="result-page">
        <h2 className="result-page-title">RESULTADO:</h2>
        <ResultTable sales={sales} />
      </div>
    );
  }
}

export default Result;
