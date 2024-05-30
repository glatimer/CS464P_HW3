import Chart from "chart.js/auto";
import useFetchData from "./fetchData";
import { backgroundColors, borderColors } from "../utils/chartColors";
import { useEffect } from "react";

export default function BarChart() {
  const { countries, loading } = useFetchData();

  // Async: wait to render the chart
  useEffect(() => {
    // Collect data for Bar chart
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

    const config = {
      type: `bar`,
      data: data,
      options: {},
    };

    const ctx = document.querySelector("#barChart");
    const barChart = new Chart(ctx, config);
    return () => {
      barChart.destroy();
    };
  }, [loading, countries]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <canvas id="barChart" width="1000" height="600"></canvas>
    </div>
  );
}
