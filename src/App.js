import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Result from "./pages/result/result.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";

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
    const { tableData } = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Homepage loadTableData={this.loadTableData} />}
          />
          <Route
            path="/resultado"
            render={() => <Result tableData={tableData} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
