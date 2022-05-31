import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/BronxCards">Bronx Cards</Link>
          </li>
          <li>
            <Link to="/ManCards">Manhattan Cards</Link>
          </li>
          <li>
            <Link to="/BrookCards">Brooklyn Cards</Link>
          </li>
          <li>
            <Link to="/App">Home Page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
