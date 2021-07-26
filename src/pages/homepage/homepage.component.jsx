import React, { Component } from "react";
import "./homepage.styles.css";
import DataTable from "../../components/data-table/data-table.component";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch(`./products.json`)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="homepage">
        <h2 className="homepage-title">INTRODUZCA LOS DATOS AQUÍ:</h2>
        <DataTable products={products} />
      </div>
    );
  }
}

export default Homepage;
