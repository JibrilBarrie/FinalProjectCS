import React, { useState } from "react";
import Plot from "react-plotly.js";

function Product() {
  const sample = [
    {
      category: "M",
      values: [166, 90, 112, 0, 0],
      types: ["Bronx", "Manhattan", "Brooklyn", "Staten Island", "Queens"]
    }
  ];

  const [data, setData] = useState([]);

  function handleClick(e) {
    sample.forEach((each) => {
      if (each.category === e.target.id) {
        setData({ values: each.values, types: each.types });
      }
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleClick} id="M">
          Number of Resturants
        </button>
      </div>
      <Plot
        data={[
          {
            type: "bar",
            x: data.types,
            y: data.values
          }
        ]}
        layout={{ width: 800, height: 600, title: "Interactive Graph" }}
      />
    </div>
  );
}
export default Product;
