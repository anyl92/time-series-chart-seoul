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
  ChartOptions,
} from "chart.js";
import { Chart } from "react-chartjs-2";

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
  const labelDataList = Object.keys(mock.response);
  const idDataList: string[] = [];
  const barDataList: number[] = [];
  const areaDataList: number[] = [];
  Object.values(mock.response).forEach((value) => {
    idDataList.push(value.id);
    barDataList.push(value.value_bar);
    areaDataList.push(value.value_area);
  });

  const options: ChartOptions = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItem) => {
            const dataIndex = tooltipItem[0].dataIndex;
            const targetData = idDataList[dataIndex];
            return targetData;
          },
        },
      },
    },
    scales: {
      yBar: {
        type: "linear",
        display: true,
        position: "right",
      },
      yArea: {
        type: "linear",
        display: true,
        position: "left",
        max: 200,
      },
    },
  };

  const dataset = [
    {
      type: "line" as const,
      label: "value_area",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(237, 200, 244)",
      borderWidth: 0,
      fill: true,
      data: areaDataList,
      yAxisID: "yArea",
    },
    {
      type: "bar" as const,
      label: "value_bar",
      backgroundColor: "rgb(121, 1, 145)",
      borderColor: "white",
      borderWidth: 2,
      data: barDataList,
      yAxisID: "yBar",
    },
  ];

  const data = {
    labels: labelDataList,
    datasets: dataset,
  };

  return (
    <div>
      <h2>Chart - Seoul</h2>

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
