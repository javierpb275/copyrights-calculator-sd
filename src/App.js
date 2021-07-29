import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Result from "./pages/result/result.component";
import Header from "./components/header/header.component";

//https://ui.dev/react-router-v4-pass-props-to-components/

class App extends Component {
  constructor() {
    super();
    this.state = {
      tableData: {
        authorName: "",
        percentage: 0,
        selectedProducts: [],
        startDate: "",
        endDate: "",
      },
    };
  }

  loadTableData = (data) => {
    this.setState({
      tableData: {
        authorName: data.authorName,
        percentage: data.percentage,
        selectedProducts: data.selectedProducts,
        startDate: data.startDate,
        endDate: data.endDate,
      },
    });
  };

  render() {
    const {tableData} = this.state;
    return (
      <div>
        <div className="header-app">
          <Header />
        </div>
        <div className="App">
          <Homepage loadTableData={this.loadTableData} />
          <Result tableData={tableData}/>
        </div>
      </div>
    );
  }
}

export default App;
