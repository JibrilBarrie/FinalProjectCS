import React from "react";
import Nav from "./Nav";
import FoodViolations from "./components/FoodViolations";
import Bronx from "./components/Bronx";
import Manhattan from "./components/Manhattan";
import Brooklyn from "./components/Brooklyn";
import "./styles.css";
import Layout from "./components/Layout";
// import ReactDOM from "react-dom";
// import * as V from "victory";
// import {
//   VictoryBar,
//   VictoryChart,
//   VictoryAxis,
//   VictoryTheme,
//   VictoryStack
// } from "victory";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <FoodViolations />
        <Bronx />
        <Manhattan />
        <Brooklyn />
        <Layout />
      </div>
    );
  }
}

export default App;
