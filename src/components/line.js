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
  const [linedata, setlinedata] = useState("20% 75%");
  const [mode, setMode] = useState(null);
  const dotanimation = {
    path: "M10,10c65,50,115,50,180,0",
    duration: 200,
    ease: "linear",
    // repeat:-1
  };

  function gundaole(e) {
    console.log("e", e);
    if (e === "enter") {
      setMode("enter");
      setlinedata("100%");
    } else {
      setlinedata(0);
    }
    console.log(linedata);
  }

  function change(e){
    console.log('change',e)
  }

  return (
    <Parallax
      className="up"
      animation={{ y: 0, opacity: 1, playScale: [0.6, 0.8] }}
      onChange={(e) => gundaole(e)}
      style={{ marginBottom: "-35%", padding: "4px" ,position:'relative'}}
    >
      {/* <TweenOne
          animation={dotanimation}
          style={{
            background: "red",
            margin: 0,
            width: 20,
            height: 20,
            transform: "translate(-10px, -10px)",
          }}
          // className="code-box-shape"
          paused={false}
          onChange={(e)=>change(e)}
        /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="255"
        height="461"
        fill="none"
        viewBox="0 0 255 461"
      >
        <TweenOne
          animation={{ SVGDraw: linedata, duration: 2000, opacity: 1 }}
          resetStyle="false"
          style={{
            fill: "none",
            strokeWidth: 10,
            stroke: "#2149DF",
          }}
          component="path"
          strokeDasharray="10"
          strokeDashoffset="10"
          strokeLinecap="round"
          d="M254 6C226.667 0 164.2.7 133 51.5 94 115 140.5 185 121.5 236s-86 18.5-78.5 155c0 55.2-28 67.333-42 66.5"
        />
      </svg>
    </Parallax>
  );
}

export default Mypath;
