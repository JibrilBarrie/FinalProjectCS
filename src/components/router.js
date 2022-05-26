import React from "react";
import "../styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import layout from "./layout";
import BrookCard from "./BrookCard";
import ManCards from "./ManCards";
import App from "../App";
import BronxCards from "./BronxCards";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BronxCards" element={<BronxCards />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
