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
    const ISBN = "978-84-1359-231-2";
    fetch(`https://api.sudespacho.net/lopd/panel/api?method=select&elemento=productos&where[referencia][%3D]=%27${ISBN}%27`)
      .then((response) => response.json())
      .then((data) => this.setState({ books: data }));
  }

  render() {
    const { books } = this.state;
    console.log(books);
    return (
      <div className="homepage">
        <h2 className="homepage-title">INTRODUZCA LOS DATOS AQUÍ:</h2>
        <DataTable books={books} />
      </div>
    );
  }
}

export default Homepage;
