import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import Result from "./pages/result/result.component";
import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentTableData } from "./redux/table-data/table-data.selectors";
import { GlobalStyle } from "./global.styles";

const App = ({ currentTableData }) => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route
          exact
          path="/resultado"
          render={() => (currentTableData ? <Result /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
};

const mapstateToProps = createStructuredSelector({
  currentTableData: selectCurrentTableData,
});

export default connect(mapstateToProps)(App);
