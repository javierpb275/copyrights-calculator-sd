import React, { Component } from "react";
import "./homepage.styles.css";
import DataTable from "../../components/data-table/data-table.component";
import books from "../../mock-api/books";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.setState({ books });
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
