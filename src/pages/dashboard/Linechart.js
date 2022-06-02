import React, { useEffect, useState } from "react";
import { useFetch } from "../../hook/useFetch";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LineChartWrapper } from "./LineChart.styled";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
    maintainAspectRatio: false,
  },
};

export default function LineChart() {
  const url =
    "https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=6c308d2c8c6f39e7a1e2a1feab24a3bc";
  const { datas, loading, error } = useFetch(url);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  if (loading) {
    return <h4>Loading</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  console.log(datas);

  useEffect(() => {
    if (datas) {
      let labels = datas.map((item) => item.date);
      let revenue = datas.map((item) => item.revenue);
      let netIncom = datas.map((item) => item.netIncome);
      setChartData({
        labels,
        datasets: [
          {
            label: "Income",
            data: revenue,
            borderColor: "hsl(337,59%,51%)",
            backgroundColor: "hsl(337,90%,51%)",
          },
          {
            label: "Net Income",
            data: netIncom,
            borderColor: "hsl(220,56%,27%)",
            backgroundColor: "hsl(227,90%,27%)",
          },
        ],
      });
    }
  }, [datas]);

  // console.log(datas);

  return (
    <LineChartWrapper>
      <Bar options={options} data={chartData} />
    </LineChartWrapper>
  );
}
