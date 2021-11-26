import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
//自设组件
import DateCom from "./components/date";
import Foodcolumn from "./components/column";
//动画库
import Texty from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import SvgDrawPlugin from "rc-tween-one/lib/plugin/SvgDrawPlugin";
import { Parallax } from "rc-scroll-anim";
// import backimg from './assets/example.png'
import data from "./assets/data";
import { center } from "@antv/g2plot/lib/plots/sankey/sankey";
TweenOne.plugins.push(SvgDrawPlugin);
//资源

// import { Line,Column} from '@antv/g2plot';
const ScrollOverPack = ScrollAnim.OverPack;
const scrollScreen = ScrollAnim.scrollScreen;

const colors = ["#F14456", "#2149DF", "#1BBC6B"];

function Mycontent() {
  return (
    // <Texty>How many times?</Texty>
    <h4>How many times?</h4>
  );
}

function App() {
  const windowheight = document.documentElement.clientHeight;
  const [mode, setMode] = useState(null);
  const [linedata, setlinedata] = useState("30% 70%");
  const mypath = [
    "M541.5,36.45313c-5,6 -8,100 -95,128c-87,28 -66,32 -173,37c-107,5 -143,106 -139,146",
    "M10,10c65,50,115,50,180,0",
  ];
  const [path, setpath] = useState(mypath[1]);
  //入场动画参数
  const entryType = "bottom";
  const entryInterval = 500;
  const entryDuration = 800;

  useEffect(() => {});

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

  function setline() {
    // setlinedata('50% 50%')
    setpath(mypath[0]);
  }
  return (
    <div className="App" style={{}}>
      {/* P0 */}
      <ScrollOverPack
        replay
        className="container"
        style={{
          height: windowheight,
          // dispaly: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <QueueAnim
          type={entryType}
          interval={entryInterval}
          duration={entryDuration}
          leaveReverse
        >
          <div key="1">
            {" "}
            <Texty>今天是我们第几次见面？</Texty>
          </div>
          <div key="2">
            <Texty>How many times have we met this year?</Texty>
          </div>
        </QueueAnim>
      </ScrollOverPack>
      {/* P1 */}
      <ScrollOverPack
        replay
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[0]} />

      </ScrollOverPack>
      {/* P2 */}
      <ScrollOverPack
        replay
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[1]} />

        <svg
          width="200"
          height="84"
          version="1.2"
          style={{ display: "block", margin: "auto" }}
        >
          <TweenOne
            animation={{ SVGDraw: linedata, duration: 500 }}
            style={{ fill: "none", strokeWidth: 10, stroke: "#FFF" }}
            component="path"
            d={path}
          />
        </svg>
      </ScrollOverPack>
      {/* P3 */}
      <ScrollOverPack
        replay
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[2]} />
      </ScrollOverPack>
      {/* P4 */}
      <ScrollOverPack
        replay
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[3]} />
      </ScrollOverPack>
      {/* P5 */}
      <ScrollOverPack
        replay
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[4]} />
      </ScrollOverPack>
      {/* P6 */}
      <ScrollOverPack
        replay
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[5]} />
      </ScrollOverPack>
      {/* P7 */}
      <ScrollOverPack
        replay
        className="container"
        style={{ height: windowheight }}
      >
        <Texty>100咯</Texty>
      </ScrollOverPack>
    </div>
  );
}

export default App;
