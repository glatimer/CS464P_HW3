import React from "react";
import Root from "./root";
import BarChart from "../components/population-chart";

export default function Population() {
  return (
    <>
      <main>
        <h1>Populations of Latin American Countries</h1>
        <Root />
        <BarChart />
      </main>
    </>
  );
}
