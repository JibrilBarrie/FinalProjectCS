import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <div>
            <li id="M">
              <a href="/BronxCards">
                <botton>Bronx Cards</botton>
              </a>
            </li>
          </div>
          <div>
            <li id="M">
              <a href="/BrookCards">
                <botton>Brooklyn Cards</botton>
              </a>
            </li>
          </div>
          <div>
            <li id="M">
              <a href="/ManCards">
                <botton>Manhattan Cards</botton>
              </a>
            </li>
          </div>
          <div>
            <li id="M">
              <a href="/">
                <botton>Home Page</botton>
              </a>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
