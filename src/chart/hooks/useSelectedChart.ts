import { MouseEvent, useRef, useState } from "react";

import { Chart as ChartJS } from "chart.js";
import { getElementAtEvent } from "react-chartjs-2";
import { areaDataList, barDataList, idDataList } from "../constants/constants";

const useSelectedChart = () => {
  const [region, setRegion] = useState<string>('');
  const chartRef = useRef<ChartJS<"line", number[], string>>(null);

  const clickChartBar = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!chartRef.current) return;

    const clicked = getElementAtEvent(chartRef.current, event);

    if (clicked.length === 0) return;

    const clickedId = clicked[0].index;
    setRegion(idDataList[clickedId]);
  };

  const selectedBarData = () => {
    return idDataList.map((_, idx) => {
      return idDataList[idx] === region ? "hotpink" : "pink";
    })
  }

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
      backgroundColor: selectedBarData(),
      borderColor: "white",
      borderWidth: 2,
      data: barDataList,
      yAxisID: "yBar",
    },
  ];

  return { chartRef, clickChartBar, dataset };
}

export default useSelectedChart;