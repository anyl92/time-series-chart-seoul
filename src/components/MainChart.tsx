import mock from "../assets/mock_data.json";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
// import { datasetType } from "../assets/types/chart";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const MainChart = () => {
  const barDataList: number[] = [];
  const areaDataList: number[] = [];
  Object.values(mock.response).forEach((value) => {
    barDataList.push(value.value_bar);
    areaDataList.push(value.value_area);
  });

  const scales = {
    yBar: {
      type: "linear",
      display: true,
      position: "left",
    },
    yArea: {
      type: "linear",
      display: true,
      position: "right",
    },
  };

  const options: any = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales,
  };

  const labels = Object.keys(mock.response);
  const dataset = [
    {
      type: "bar" as const,
      label: "value_bar",
      backgroundColor: "rgb(121, 1, 145)",
      borderColor: "white",
      borderWidth: 2,
      data: barDataList,
      yAxisID: "yBar",
    },
    {
      type: "line" as const,
      label: "value_area",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(237, 200, 244)",
      borderWidth: 2,
      fill: true,
      data: areaDataList,
      yAxisID: "yArea",
    },
  ];

  const data = {
    labels,
    datasets: dataset,
  };

  return (
    <div>
      <h2>!@@#!@#Chart</h2>

      <Chart
        type="bar"
        data={data}
        options={options}
        width={1024}
        height={600}
      />
    </div>
  );
};

export default MainChart;
