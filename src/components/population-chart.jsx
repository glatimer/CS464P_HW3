import React from "react";
import { Bar } from "react-chartjs-2";
import useFetchData from "./fetchData";
import { backgroundColors, borderColors } from "../utils/chartColors";

export default function BarChart() {
  const { countries, loading } = useFetchData();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // Prepare data for Doughnut chart
  const data = {
    labels: countries.map((country) => country.name),
    datasets: [
      {
        label: "Population",
        data: countries.map((country) => country.population),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}
