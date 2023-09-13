import mock from "../../assets/mock_data.json";
import { ChartOptions } from "chart.js";

export const labelDataList = Object.keys(mock.response);

export const idDataList: string[] = [];
export const barDataList: number[] = [];
export const areaDataList: number[] = [];
Object.values(mock.response).forEach((value) => {
  idDataList.push(value.id);
  barDataList.push(value.value_bar);
  areaDataList.push(value.value_area);
});

export const options: ChartOptions = {
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

export const regions = ["해제", "성북구", "강남구", "노원구", "중랑구"];