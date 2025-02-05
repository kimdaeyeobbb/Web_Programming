// "use client";
// import React, { useRef } from "react";
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Radar } from "react-chartjs-2";
// import dragData from "chartjs-plugin-dragdata";

// ChartJS.register(
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
//   dragData
// );

// const DraggableRadarChart = ({ data }) => {
//   const chartRef = useRef(null);

//   const options = {
//     scales: {
//       r: {
//         min: 0,
//         max: 20,
//         beginAtZero: true,
//         ticks: {
//           stepSize: 5,
//         },
//       },
//     },
//     plugins: {
//       tooltip: {
//         enabled: true,
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.raw}`,
//         },
//       },
//       dragData: {
//         round: 1,
//         showTooltip: true,
//         dragX: false,
//         dragY: true,
//         onDragStart: (e, element) => {
//           if (e.target?.style) {
//             e.target.style.cursor = "grab";
//           }
//         },
//         onDrag: (e, datasetIndex, index, value) => {
//           const boundedValue = Math.max(0, Math.min(20, value));
//           if (chartRef.current) {
//             const chart = chartRef.current;
//             chart.data.datasets[datasetIndex].data[index] = boundedValue;
//             chart.update("none");
//           }
//           if (e.target?.style) {
//             e.target.style.cursor = "grabbing";
//           }
//         },
//         onDragEnd: (e, datasetIndex, index, value) => {
//           if (e.target?.style) {
//             e.target.style.cursor = "default";
//           }
//           if (chartRef.current) {
//             chartRef.current.update();
//           }
//         },
//       },
//     },
//     maintainAspectRatio: true,
//     responsive: true,
//     onHover: (e) => {
//       const point = e.chart.getElementsAtEventForMode(
//         e,
//         "nearest",
//         { intersect: true },
//         false
//       );
//       if (e.native?.target?.style) {
//         e.native.target.style.cursor = point.length ? "grab" : "default";
//       }
//     },
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">Spider Chart Ex</h2>
//       <div className="aspect-square">
//         <Radar ref={chartRef} data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default DraggableRadarChart;

"use client";
import type React from "react";
import { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartArea,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import dragData from "chartjs-plugin-dragdata";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  dragData
);

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string | CanvasGradient;
  borderColor: string[];
  borderWidth: number;
  pointHitRadius: number;
  pointBackgroundColor: string[];
  pointBorderColor: string[];
  fill: boolean;
}

interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

interface DraggableRadarChartProps {
  data: ChartData;
}

const DraggableRadarChart: React.FC<DraggableRadarChartProps> = ({ data }) => {
  const chartRef = useRef<ChartJS>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const createGradient = (
      ctx: CanvasRenderingContext2D,
      area: ChartArea,
      colors: string[]
    ) => {
      console.log("들어오는 색상: ", colors);
      const gradient = ctx.createLinearGradient(
        area.left,
        area.top,
        area.right,
        area.bottom
      );

      colors.forEach((color, index) => {
        gradient.addColorStop(
          index / (colors.length - 1),
          color.replace("rgb", "rgba").replace(")", ", 0.5)")
        );
      });

      // colors.forEach((color, index) => {
      //   gradient.addColorStop(
      //     index / (colors.length - 1),
      //     color.replace("rgb", "rgba").replace(")", ", )")
      //   );
      // });

      return gradient;
    };
    // {
    //   const centerX = area.left + area.width / 2;
    //   const centerY = area.top + area.height / 2;
    //   const radius = Math.min(area.width, area.height) / 2;
    //   const segments: CanvasGradient[] = [];

    //   // Create gradient for each segment between vertices
    //   for (let i = 0; i < colors.length; i++) {
    //     console.log("들어오는 색상: ", colors[i]);
    //     const currentColor = colors[i];
    //     const nextColor = colors[(i + 1) % colors.length];

    //     // Calculate start and end points for gradient
    //     const angle = (i * 2 * Math.PI) / colors.length;
    //     const nextAngle = ((i + 1) * 2 * Math.PI) / colors.length;

    //     const startX = centerX + Math.cos(angle) * radius;
    //     const startY = centerY + Math.sin(angle) * radius;
    //     const endX = centerX + Math.cos(nextAngle) * radius;
    //     const endY = centerY + Math.sin(nextAngle) * radius;

    //     const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
    //     gradient.addColorStop(
    //       0,
    //       currentColor.replace("rgb", "rgba").replace(")", ", 0.5)")
    //     );
    //     gradient.addColorStop(
    //       1,
    //       nextColor.replace("rgb", "rgba").replace(")", ", 0.5)")
    //     );

    //     segments.push(gradient);
    //   }

    //   return segments;
    // };

    const updateGradients = () => {
      const ctx = chart.ctx;
      const area = chart.chartArea;

      data.datasets.forEach((dataset, i) => {
        const colors = dataset.pointBackgroundColor as string[];
        dataset.backgroundColor = createGradient(ctx, area, colors);
      });

      chart.update();
    };

    updateGradients();
  }, [data]);

  const options = {
    scales: {
      r: {
        min: 0,
        max: 20,
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
      dragData: {
        round: 1,
        showTooltip: true,
        dragX: false,
        dragY: true,
        onDragStart: (e: any, element: any) => {
          if (e.target?.style) {
            e.target.style.cursor = "grab";
          }
        },
        onDrag: (
          e: any,
          datasetIndex: number,
          index: number,
          value: number
        ) => {
          const boundedValue = Math.max(0, Math.min(20, value));
          if (chartRef.current) {
            const chart = chartRef.current;
            chart.data.datasets[datasetIndex].data[index] = boundedValue;
            chart.update("none");
          }
          if (e.target?.style) {
            e.target.style.cursor = "grabbing";
          }
        },
        onDragEnd: (
          e: any,
          datasetIndex: number,
          index: number,
          value: number
        ) => {
          if (e.target?.style) {
            e.target.style.cursor = "default";
          }
          if (chartRef.current) {
            chartRef.current.update();
          }
        },
      },
    },

    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Spider Chart Ex</h2>
      <div className="aspect-square">
        <Radar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default DraggableRadarChart;
