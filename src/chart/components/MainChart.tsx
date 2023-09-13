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
import { labelDataList, options } from "../constants/constants";
import useSelectedChart from "../hooks/useSelectedChart";
import Filter from "./Filter";

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
  const { chartRef, clickChartBar, dataset, handleClickFilter } =
    useSelectedChart();
  const data = {
    labels: labelDataList,
    datasets: dataset,
  };

  return (
    <div>
      <h2>Chart - Seoul</h2>
      <Filter handleClickFilter={handleClickFilter} />
      <Chart
        ref={chartRef}
        onClick={clickChartBar}
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
