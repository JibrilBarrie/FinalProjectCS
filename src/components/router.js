import React from "react";
import "../styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import BronxCards from "./BronxCards";
import ManCards from "./ManCards";
import BrookCards from "./BrookCards";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BronxCards" element={<BronxCards />} />
        <Route path="/BrookCards" element={<BrookCards />} />
        <Route path="/ManCards" element={<ManCards />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
