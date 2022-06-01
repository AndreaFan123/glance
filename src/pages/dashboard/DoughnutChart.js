import React, { useEffect, useState, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useCollection } from "../../hook/useCollection";
import { useAuthContext } from "../../hook/useContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const { user } = useAuthContext();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [defaultData, setDefaultData] = useState("");
  const { documents, error } = useCollection("expenses", [
    "uid",
    "==",
    user.uid,
  ]);

  // console.log(documents);

  useEffect(() => {
    if (documents) {
      let labels = documents.map((expense) => expense.category);
      let datas = documents.map((expense) => expense.amount);
      setChartData({
        labels,
        datasets: [
          {
            label: "# of expense",
            data: datas,
            backgroundColor: [
              "hsl(227,56%,27%)",
              "hsl(9,96%,64%)",
              "hsl(300,42%,35%)",
              "hsl(177,29%,60%)",
              "hsl(337,59%,51%)",
              "hsl(290,36%,58%)",
              "hsl(230,100%,78%)",
              "hsl(316,100%,81%)",
            ],
            borderWidth: 1,
          },
        ],
      });
    }

    if (!documents) {
      setDefaultData("No expense");
    }
  }, [documents]);

  return (
    <div style={{ width: "350px", height: "350px" }}>
      {documents && <Doughnut data={chartData} />}
      {!documents && <h4>{defaultData}</h4>}
    </div>
  );
}
