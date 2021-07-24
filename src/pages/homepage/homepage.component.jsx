import React from "react";
import "./homepage.styles.css";
import DataTable from "../../components/data-table/data-table.component";

const Homepage = () => (
  <div className="homepage">
    <h2 className="homepage-title">INTRODUZCA LOS DATOS AQUÍ:</h2>
    <DataTable />
  </div>
);

export default Homepage;
