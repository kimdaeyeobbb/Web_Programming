// import Image from "next/image";
// import styles from "./page.module.css";
import Radar from "./components/Radar";

export default function Home() {
  // 첫 번째 데이터셋과 두 번째 데이터셋을 하나의 data 객체로 통합
  const vertexColors = [
    "rgb(255, 99, 132)", // Red
    "rgb(54, 162, 235)", // Blue
    "rgb(255, 206, 86)", // Yellow
    "rgb(75, 192, 192)", // Green
    "rgb(153, 102, 255)", // Purple
  ];

  const combinedData = {
    labels: ["Running", "Swimming", "Eating", "Cycling", "Sleeping"],
    datasets: [
      {
        label: "Activity Metrics 1",
        data: [20, 10, 4, 2, 15],
        // backgroundColor: "rgba(255, 255, 255, 0.2)",
        // borderColor: vertexColors,
        borderWidth: 1,
        pointHitRadius: 25,
        pointBackgroundColor: vertexColors,
        pointBorderColor: vertexColors,
        fill: true,
      },
      // {
      //   label: "Activity Metrics 2",
      //   data: [10, 15, 8, 5, 12],
      //   backgroundColor: "rgba(255, 255, 255, 0.1)",
      //   borderColor: vertexColors.map((color) =>
      //     color.replace("rgb", "rgba").replace(")", ", 0.6)")
      //   ),
      //   borderWidth: 1,
      //   pointHitRadius: 25,
      //   pointBackgroundColor: vertexColors,
      //   pointBorderColor: vertexColors,
      //   fill: true,
      // },
    ],
  };
  return (
    <div>
      <div>
        <Radar data={combinedData} />
      </div>
    </div>
  );
}
