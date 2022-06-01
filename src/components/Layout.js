import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/BronxCards">
              <li>Bronx Cards</li>
            </a>
          </li>
          <li>
            <a href="/BrookCards">
              <li>Brooklyn Cards</li>
            </a>
          </li>

          <li>
            <a href="/ManCards">
              <li>Manhattan Cards</li>
            </a>
          </li>

          <li>
            <a href="/">
              <li>Home Page</li>
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
