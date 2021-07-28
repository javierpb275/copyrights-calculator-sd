import React, { Component } from "react";
import "./homepage.styles.scss";
import DataTable from "../../components/data-table/data-table.component";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loadTableData } = this.props;
    return (
      <div className="homepage">
        <h2 className="homepage-title">INTRODUZCA LOS DATOS AQUÍ:</h2>
        <DataTable loadTableData={loadTableData} />
      </div>
    );
  }
}

export default Homepage;
