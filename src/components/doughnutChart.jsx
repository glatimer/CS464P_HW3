import Chart from "chart.js/auto";
import useFetchData from "./fetchData";
import { backgroundColors, borderColors } from "../utils/chartColors";
import { useEffect } from "react";

export default function DoughnutChart() {
  const { countries, loading } = useFetchData();

  // Collect language count
  const langCount = {};
  countries.forEach((country) => {
    country.official_languages.forEach((lang) => {
      if (langCount[lang]) {
        langCount[lang] += 1;
      } else {
        langCount[lang] = 1;
      }
    });
  });

  // Async: wait to render the chart
  useEffect(() => {
    // Collect data for Doughnut chart
    const data = {
      labels: Object.keys(langCount),
      datasets: [
        {
          label: "Languages",
          data: Object.values(langCount),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: `doughnut`,
      data: data,
      options: {},
    };

    const ctx = document.querySelector("#doughnutChart");
    const doughnutChart = new Chart(ctx, config);
    return () => {
      doughnutChart.destroy();
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
      <canvas id="doughnutChart" width="1000" height="600"></canvas>
    </div>
  );
}
