import React from "react";
import Card from "./Card";
import Layout from "./Layout";

class ManCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/ud4g-9x9z.json?$$app_token=iyTGvDggNXuzGenPvvZjEM0gH&borough=New%20York"
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
      <div className="ManCards">
        <Layout />
        <iframe src="https://www.google.com/maps/d/embed?mid=1LV0hy9lR4_uMwoDNxLJyp2mtjiRWBgw&ehbc=2E312F" width="640" height="480"></iframe>
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

export default ManCards;
