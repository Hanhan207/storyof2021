import "../App.css";
import Texty from "rc-texty";
import TweenOne from "rc-tween-one";
import ScrollAnim from "rc-scroll-anim";
import { useState } from "react";
import SvgDrawPlugin from "rc-tween-one/lib/plugin/SvgDrawPlugin";
import { Parallax } from "rc-scroll-anim";
TweenOne.plugins.push(SvgDrawPlugin);
// import ScrollAnim from 'rc-scroll-anim';

const mypath = [
  "M254 6C226.667 0 164.2.7 133 51.5 94 115 140.5 185 121.5 236s-86 18.5-78.5 155c0 55.2-28 67.333-42 66.5",
  "M10,10c65,50,115,50,180,0",
];
function Mypath() {
  const [path, setpath] = useState(mypath[0]);
  const [linedata, setlinedata] = useState("30% 70%");
  const [mode, setMode] = useState(null);

  function gundaole(e) {
    // console.log(e)
    if (e === "enter") {
      setMode("enter");
      setlinedata("100%");
    } else {
      setlinedata(0);
    }
    console.log(linedata);
  }

  return (
    <Parallax
      className="up"
      animation={{ y: 0, opacity: 1, playScale: [0.6, 0.8] }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="255"
        height="461"
        version="1.2"
        style={{
          display: "block",
          margin: "auto",
        }}
        d={path[0]}
      >
        <TweenOne
          animation={{ SVGDraw: linedata, duration: 2000, opacity: 1 }}
          style={{
            fill: "none",
            strokeWidth: 10,
            stroke: "#2149DF",
          }}
          component="path"
          d={path}
        />
      </svg>
    </Parallax>
  );
}

export default Mypath;
