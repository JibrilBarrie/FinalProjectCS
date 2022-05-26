import React from "react";
import Card from "./components/Card";
import Nav from "./Nav";
import FoodViolations from "./components/FoodViolations";
import Bronx from "./components/Bronx";
import Manhattan from "./components/Manhattan";
import Brooklyn from "./components/Brooklyn";
import "./styles.css";
import ReactDOM from "react-dom";
import * as V from "victory";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/ud4g-9x9z.json?$$app_token=iyTGvDggNXuzGenPvvZjEM0gH&borough=Bronx"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <FoodViolations />
        <Bronx />
        <Manhattan />
        <Brooklyn />

        <div className="grid">
          {console.log(this)}
          {this.state.data.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
