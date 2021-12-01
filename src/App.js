import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
//自设组件
import DateCom from "./components/date";
import Foodcolumn from "./components/column";
import Mypath from "./components/line";
import Park from "./components/park";
import Fall from "./components/fall";
import Mytext from "./components/mytext";
import Mad from "./components/mad";
import Tickets from "./components/tickets";
import Album from "./components/album";
//动画库
import Texty from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";

import { Parallax } from "rc-scroll-anim";
// import backimg from './assets/example.png'
import data from "./assets/data";
import { center } from "@antv/g2plot/lib/plots/sankey/sankey";

const ScrollOverPack = ScrollAnim.OverPack;

const colors = ["#F14456", "#2149DF", "#1BBC6B"];

function App() {
  const mypath = [
    "M254 6C226.667 0 164.2.7 133 51.5 94 115 140.5 185 121.5 236s-86 18.5-78.5 155c0 55.2-28 67.333-42 66.5",
    "M10,10c65,50,115,50,180,0",
  ];
  const windowheight = document.documentElement.clientHeight * 0.8;
  const widowwidth = document.documentElement.clientWidth;

  //入场动画参数
  const entryType = "bottom";
  const entryInterval = 500;
  const entryDuration = 800;
  // var path = document.querySelector("#road");
  const myroad = useRef();
  var path = myroad.current;
  console.log(path);

  return (
    <div
      className="App"
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          // width: widowwidth,
        }
      }
    >
      <Parallax
       id='qiuqian1'
        className="up"
        animation={{ rotate: 30, playScale: [0.1, 0.8] }}
      />
      {/* <div id='qiuqian1'/> */}
      {/* <div id='qiuqian2'/> */}
      {/* P0 */}
      <ScrollOverPack
        replay={false}
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
            <Texty className="dateP2">今天是我们第几次见面？</Texty>
          </div>
          <div key="2">
            <Texty className="dateP1">
              How many times have we met this year?
            </Texty>
          </div>
        </QueueAnim>
      </ScrollOverPack>
      {/* P1 */}
      <ScrollOverPack
         replay={false}
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[0]} />
        <Foodcolumn />

        {/* <div dangerouslySetInnerHTML={{ __html:  data.date[0].des}} /> */}
        <Mytext content={data.date[0].des} />
      </ScrollOverPack>
      {/* P2 */}
      <ScrollOverPack
         replay={false}
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[1]} />
        <Park />
        <Mytext content={data.date[1].des} />
      </ScrollOverPack>
      {/* P3 */}
      <ScrollOverPack
        replay={false}
        className="container"
        style={{ height: windowheight }}
        
      >
        <DateCom data={data.date[2]} />
        
        <Mypath />

        <Mytext content={data.date[2].des} />
      </ScrollOverPack>
      {/* P4 */}
      <ScrollOverPack
         replay={false}
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[3]} />
        <Mad />
        <Mytext content={data.date[3].des} />
      </ScrollOverPack>
      {/* P5 */}
      <ScrollOverPack
        replay={false}
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[4]} />
        <Fall />
        <Mytext content={data.date[4].des} />
      </ScrollOverPack>
      {/* P6 */}
      <ScrollOverPack
         replay={false}
        className="container"
        style={{ height: windowheight }}
      >
        <DateCom data={data.date[5]} />
        <Tickets />
        <Mytext content={data.date[5].des} />
      </ScrollOverPack>
      {/* P7 */}

      <Album wheight={windowheight} wwidth={widowwidth} />

      <ScrollOverPack
        replay={false}
        className="container"
        style={{ height: windowheight }}
      >
        <QueueAnim
          type={entryType}
          interval={entryInterval}
          duration={entryDuration}
          leaveReverse
        >
          <div key="1">
            <Texty className="dateP2">今天是我们第100次见面</Texty>
          </div>
          <div key="2">
            <Texty className="dateP1">也是2022年第一次见面，新年快乐!</Texty>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  );
}

export default App;
