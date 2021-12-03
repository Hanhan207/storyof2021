import "../App.css";
import { Column } from "@antv/g2plot";
import { useEffect } from "react";
import { Parallax } from "rc-scroll-anim";

const data = [
  {
    Type: "螺蛳粉",
    Count: 8,
  },
  {
    Type: "烤肉",
    Count: 7,
  },
  {
    Type: "面条",
    Count: 5,
  },
  {
    Type: "米线",
    Count: 5,
  },
  {
    Type: "烤串",
    Count: 4,
  },
];

const colors = ["#E98102", "#BEB56D", "#1BBC6B"];

function Foodcolumn() {
  useEffect(() => {
    const columnPlot = new Column("lineCon", {
      data,
      xField: "Type",
      yField: "Count",
      label: {
        position: "middle",
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      color: ({ Type }) => {
        if (Type === "螺蛳粉") {
          return colors[0];
        }
        return colors[1];
      },
      animation: {
        // 配置图表第一次加载时的入场动画
        appear: {
          animation: "scale-in-y", // 动画效果
          duration: 5000, // 动画执行时间
          delay: 500,
          easing: "easeCircleOut",
        },
      },
    });
    columnPlot.render();
  });
  return (
    <Parallax
      className="up"
      animation={{ y: 0, opacity: 1, playScale: [0.6, 0.8] }}
    >
      <div id="lineCon" style={{ width: 300, height: 250, margin: 16 }} />
    </Parallax>
  );
}

export default Foodcolumn;
