"use client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = () => {
  const option = {
    chart: {
      id: "검진 통계 - 일별",
    },
    xaxis: {
      categories: ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"],
    },
    yaxis: {
      min: 0,
      max: 200,
      tickAmount: 4,
    },
  };

  const series = [
    {
      name: "예약 요청",
      data: [90, 35, 110, 75, 65, 25, 60],
    },
    {
      name: "예약 확정",
      data: [98, 55, 155, 58, 50, 90, 75],
    },
    {
      name: "검진 완료",
      data: [103, 75, 135, 115, 115, 80, 90],
    },
    {
      name: "예약 취소",
      data: [10, 20, 35, 15, 22, 9, 12],
    },
  ];

  return (
    <>
      <h1>라인차트 - 일간</h1>
      <ApexChart
        type="line"
        options={option}
        series={series}
        height={600}
        width={800}
      />
    </>
  );
};

export default LineChart;
