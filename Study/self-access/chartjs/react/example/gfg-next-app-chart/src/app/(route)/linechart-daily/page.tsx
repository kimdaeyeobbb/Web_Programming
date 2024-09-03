"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { ChartOptions } from "chart.js";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const dateRange = ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"];
const chartData = [
  {
    label: "예약 대기",
    data: [89, 35, 101, 70, 60, 25, 55],
    borderColor: "orange",
    backgroundColor: "orange",
  },
  {
    label: "예약 확정",
    data: [100, 50, 160, 60, 50, 90, 80],
    borderColor: "blue",
    backgroundColor: "blue",
  },
  {
    label: "검진 완료",
    data: [105, 85, 130, 115, 115, 78, 87],
    borderColor: "green",
    backgroundColor: "green",
  },
  {
    label: "예약 취소",
    data: [10, 20, 38, 13, 19, 7, 13],
    borderColor: "red",
    backgroundColor: "red",
  },
];

const data = {
  labels: dateRange,
  datasets: chartData,
};

const options: ChartOptions<"line"> = {
  scales: {
    x: {
      grid: {
        display: false, // 수직축
      },
    },
    y: {
      grid: {
        display: true, // 수평축
      },
      border: {
        display: false,
      },
      min: 0,
      max: 200,
      ticks: {
        stepSize: 50,
      },
    },
  },
  elements: {
    point: {
      radius: 0, // 각 지점의 점모양을 없앰
    },
  },

  interaction: {
    mode: "index", // 세로축에 마우스를 가져다 댔을 때 모든 요소를 나타냄
    intersect: false,
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: "rect", // 채워진 사각형으로 설정
      },
    },
  },
};

const LineChart = () => {
  return (
    <div style={{ width: "900px", height: "900px" }}>
      <h1>Example 1: Line Chart</h1>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
