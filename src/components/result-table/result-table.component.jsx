import React, { Component } from "react";
import "./result-table.styles.css";

class ResultTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      total: 0,
    };
  }

  render() {
    const { tableData } = this.props;
    return (
      <div className="result-table">
        <h2 className="result-table-title">RESULT TABLE</h2>
        <p>{tableData.authorName}</p>
      </div>
    );
  }
}

export default ResultTable;
