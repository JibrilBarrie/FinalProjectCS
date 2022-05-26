import React from "react";

const styling = {
  width: "18rem"
};

function Card(props) {
  //console.log(props);
  return (
    <div class="card" style={styling}>
      <img
        src="https://cdn.vox-cdn.com/thumbor/RwS9LaXv8Evq9mM_PUkOe6hSSAI=/0x0:5000x3333/1200x900/filters:focal(1577x1580:2377x2380):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62369036/20180920_GH_MANHATTA_1018.0.jpg"
        class="card-img-top"
        alt="..."
        width=""
        height="100"
      />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <h3 class="card-text">{props.data.store_name}</h3>
        <p class="card-text">
          Address:
          {props.data.street_address}
        </p>

        <p class="card-text">
          Borough:
          {props.data.borough}
        </p>

        <p class="card-text">
          Year Awarded:
          {props.data.year_awarded}
        </p>
      </div>
    </div>
  );
}

export default Card;
