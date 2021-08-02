import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Result from "./pages/result/result.component";
import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const {currentTableData} = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/resultado" render={() => currentTableData? (<Result />) : (<Redirect to='/'/>)} />
        </Switch>
      </div>
    );
  }
}

const mapstateToProps = ({ tableData }) => ({
  currentTableData: tableData.currentTableData
});

export default connect(mapstateToProps)(App);
