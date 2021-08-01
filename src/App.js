import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Result from "./pages/result/result.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentTableData } from "./redux/table-data/table-data.actions";

class App extends Component {
  loadTableData = (data) => {
    const { setCurrentTableData } = this.props;
    setCurrentTableData({
      authorName: data.authorName,
      percentage: data.percentage,
      selectedProducts: data.selectedProducts,
      startDate: data.startDate,
      endDate: data.endDate,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Homepage loadTableData={this.loadTableData} />}
          />
          <Route path="/resultado" render={() => <Result />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentTableData: (tableData) => dispatch(setCurrentTableData(tableData)),
});

export default connect(null, mapDispatchToProps)(App);
