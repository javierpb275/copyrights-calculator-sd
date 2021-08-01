import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Result from "./pages/result/result.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentTableData } from "./redux/table-data/table-data.actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
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
