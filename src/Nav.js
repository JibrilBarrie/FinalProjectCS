import React from "react";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const Nav = () => {
  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById(e.currentTarget.hash.slice(1))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#FoodViolations" onClick={handleClick}>
            Certified Healthy Shops
          </a>
        </li>
        <li>
          <a href="#Bronx" onClick={handleClick}>
            Bronx
          </a>
        </li>
        <li>
          <a href="#Manhattan" onClick={handleClick}>
            Manhattan
          </a>
        </li>

        <li>
          <a href="#Brooklyn" onClick={handleClick}>
            Brooklyn
          </a>
        </li>
        <li>
          <a href="#Graph" onClick={handleClick}>
            Graph
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
