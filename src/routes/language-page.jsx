import React, { useEffect } from "react";
import Root from "./root";
import DoughnutChart from "../components/doughnutChart";

export default function LanguagesChart() {
  return (
    <div>
      <h1>Language Data of Latin America</h1>
      <Root />
      <DoughnutChart />
    </div>
  );
}
