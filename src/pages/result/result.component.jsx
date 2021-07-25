import React, { Component } from "react";
import "./result.styles.css";
import ResultTable from "../../components/result-table/result-table.component";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      sales: [],
    };
  }

  componentDidMount() {
    fetch("./sales.json")
      .then((response) => response.json())
      .then((data) => this.setState({ sales: data }));
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
