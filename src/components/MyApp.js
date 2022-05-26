import React from "react";

function MyApp() {
  return (
    <div className="App">
      <div class="row">
        <div class="column">
          <img src="Queens.jpg" alt="Queens" />
        </div>
        <div class="column">
          <img src="bronx.jpg" alt="Bronx" />
        </div>
        <div class="column">
          <img src="manpic.jpg" alt="Manhattan" />
        </div>
      </div>
      <MyApp />
    </div>
  );
}
export default MyApp;
