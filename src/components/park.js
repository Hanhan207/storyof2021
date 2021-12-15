import "../App.css";
import { Line, G2 } from "@antv/g2plot";
import { useEffect } from "react";
import { Parallax } from "rc-scroll-anim";

// const { InteractionAction, registerInteraction, registerAction } = G2;

const data = [
  // { year: "1991", value: 3 },
  // { year: "1992", value: 4 },
  // { year: "1993", value: 3.5 },
  { year: "天坛公园", value: 49 },
  { year: "元大都遗址公园", value: 52 },
  { year: "北京动物园", value: 56 },
  { year: "奥林匹克公园", value: 86.5 },
  { year: "颐和园", value: 140 },
  { year: "八大处", value: 465 },
];

function Park(e) {
  const color = "l(90) 0:rgba(233, 129, 1, 1) 1:rgba(233, 129, 1, 0)";
  const dot = "rgba(233, 129, 1, 1)";
  useEffect(() => {
    G2.registerShape("point", "breath-point", {
      draw(cfg, container) {
        const data = cfg.data;
        const point = { x: cfg.x, y: cfg.y };
        const group = container.addGroup();
        if (data.year === "八大处" && data.value === 465) {
          const decorator1 = group.addShape("circle", {
            attrs: {
              x: point.x,
              y: point.y,
              r: 10,
              fill: dot,
              opacity: 0.5,
            },
          });
          const decorator2 = group.addShape("circle", {
            attrs: {
              x: point.x,
              y: point.y,
              r: 10,
              fill: dot,
              opacity: 0.5,
            },
          });
          const decorator3 = group.addShape("circle", {
            attrs: {
              x: point.x,
              y: point.y,
              r: 10,
              fill: dot,
              opacity: 0.5,
            },
          });
          decorator1.animate(
            {
              r: 20,
              opacity: 0,
            },
            {
              duration: 1800,
              easing: "easeLinear",
              repeat: true,
            }
          );
          decorator2.animate(
            {
              r: 20,
              opacity: 0,
            },
            {
              duration: 1800,
              easing: "easeLinear",
              repeat: true,
              delay: 600,
            }
          );
          decorator3.animate(
            {
              r: 20,
              opacity: 0,
            },
            {
              duration: 1800,
              easing: "easeLinear",
              repeat: true,
              delay: 1200,
            }
          );
          group.addShape("circle", {
            attrs: {
              x: point.x,
              y: point.y,
              r: 6,
              fill: dot,
              opacity: 0.7,
            },
          });
          group.addShape("circle", {
            attrs: {
              x: point.x,
              y: point.y,
              r: 1.5,
              fill: dot,
            },
          });
        }

        return group;
      },
    });
    const line = new Line("park", {
      data,
      padding: "[50,0,0,0]",
      xField: "year",
      yField: "value",
      xAxis: false,
      yAxis: false,
      lineStyle: {
        stroke: "rgba(233, 129, 1, 1)",
      },
      meta: {
        value: {
          min: 0,
          max: 500,
        },
      },
      area: {
        color: color,
      },
      point: {
        shape: "breath-point",
        size: 5,
      },
      animation: {
        // 配置图表第一次加载时的入场动画
        appear: {
          animation: "wave-in", // 动画效果
          duration: 5000, // 动画执行时间
          delay: 500,
          easing: "easeCircleOut",
        },
      },
    });

    line.render();
  });

  return (
    <Parallax
      className="up"
      animation={{ y: 0, opacity: 1, playScale: [0.6, 0.8] }}
    >
      <div
        id="park"
        style={{
          width: 300,
          height: 250,
          margin: 16,
        }}
      ></div>
    </Parallax>
  );
}

export default Park;
