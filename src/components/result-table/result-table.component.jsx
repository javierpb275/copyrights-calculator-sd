import React, { Component } from "react";
import "./result-table.styles.css";

class ResultTable extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      total: 0,
    };
  }

  render() {
    const { sales } = this.props;
    return (
      <div className="result-table">
        <h2 className="result-table-title">RESULT TABLE</h2>
      </div>
    );
  }
}

export default ResultTable;
