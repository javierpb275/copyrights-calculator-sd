import React, { Component } from "react";
import "./homepage.styles.css";
import DataTable from "../../components/data-table/data-table.component";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch("./books.json")
      .then((response) => response.json())
      .then((data) => this.setState({ books: data }));
  }

  render() {
    const { books } = this.state;
    return (
      <div className="homepage">
        <h2 className="homepage-title">INTRODUZCA LOS DATOS AQUÍ:</h2>
        <DataTable books={books} />
      </div>
    );
  }
}

export default Homepage;
