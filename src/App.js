import React from "react";
import Nav from "./Nav";
import FoodViolations from "./components/FoodViolations";
import Bronx from "./components/Bronx";
import Manhattan from "./components/Manhattan";
import Brooklyn from "./components/Brooklyn";
import "./styles.css";
import Layout from "./components/Layout";
import Product from "./components/Graph";

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
        <Product />
      </div>
    );
  }
}

export default App;
