import React from "react";
import ReactDOM from "react-dom/client";
import MainChart from "./chart/components/MainChart.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainChart />
  </React.StrictMode>
);
