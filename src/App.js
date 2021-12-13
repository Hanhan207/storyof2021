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
import { Face, Lu, Han } from "./components/face";
//动画库

import ScrollAnim from "rc-scroll-anim";

import { Parallax } from "rc-scroll-anim";
// import backimg from './assets/example.png'
import data from "./assets/data";

const ScrollOverPack = ScrollAnim.OverPack;

const colors = ["#F14456", "#2149DF", "#1BBC6B"];

function Heart() {
  return (
    <Parallax
      style={{
        transform: "translateY(20px)",
        opacity: 0,
        marginLeft: "-10%",
        marginRight: "-10%",
      }}
      animation={[{ y: 0, opacity: 1, playScale: [0.2, 0.5] }]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="48"
        fill="#E98102"
        viewBox="0 0 52 48"
      >
        <path
          stroke="#E98102"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.5 1.5C6.598 1.5 1 7.04 1 13.875c0 5.517 2.188 18.612 23.72 31.85a2.462 2.462 0 002.56 0C48.812 32.487 51 19.392 51 13.875 51 7.04 45.403 1.5 38.5 1.5 31.598 1.5 26 9 26 9s-5.598-7.5-12.5-7.5z"
        />
      </svg>
    </Parallax>
  );
}

function App() {
  const windowheight = document.documentElement.clientHeight * 0.8;
  const widowwidth = document.documentElement.clientWidth;

  //入场动画参数
  const entryType = "bottom";
  const entryInterval = 500;
  const entryDuration = 800;
  const myroad = useRef();
  var path = myroad.current;
  console.log(path);

  return (
    <div className="App">
      {/* P0 */}
      <ScrollOverPack
        replay={false}
        className="container"
        style={{
          height: windowheight,
          
        }}
      >
        <Face  />
      </ScrollOverPack>
      {/* P1 */}
      <ScrollOverPack
        replay={false}
        className="container"
        style={{ height: windowheight, }}
      >
        <DateCom data={data.date[0]} />
        <Foodcolumn />
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
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Album wheight={windowheight} wwidth={widowwidth} />
      </div>
      <ScrollOverPack
        replay={false}
        className="container"
        style={{ height: windowheight }}
      >
        <div style={{ align: "center", width: "80%", marginTop:'-100px',marginBottom:'30px'  }}>
          <div id='end'>
            <Parallax
              className="up"
              animation={{ y: 0, opacity: 1, playScale: [0.3, 0.5] }}
            >
              <div className="linebolck dateP1">
                <div>12 月 31 日</div>
              </div>
            </Parallax>
            <Parallax
              className="dateP2 up"
              animation={{ y: 0, opacity: 1, playScale: [0.3, 0.5] }}
            >
              第一百次见面
            </Parallax>
            <Parallax
              className="dateP1 up"
              animation={{ y: 0, opacity: 1, playScale: [0.3, 0.5] }}
            >
              今天是我们第100次见面，也是2022年第一次见面，新年快乐!
            </Parallax>
            <Parallax
              className="up"
              animation={{ y: 0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{
                width: "240px",
                borderBottom: "solid",
                margin: "12px",
                borderColor: "#BEB56D",
                borderWidth: "2px",
              }}
            ></Parallax>
          </div>
          <Parallax
            style={{
              opacity: 0,
              filter: "blur(0px)",
              position: "relative",
              top: "-80px",
              fontSize: "48px",
              fontFamily: "Song",
              letterSpacing: "3px",
            }}
            animation={[
              { opacity: 1, playScale: [0.1, 0.2] },
              { opacity: 0.2, blur: "10px", playScale: [0.2, 0.3] },
            ]}
          >
            No<span style={{ color: "#4864C5" }}>.</span>100
          </Parallax>
        </div>
        <Parallax
          style={{
            transform: "translateY(30px)",
            opacity: 0,
            filter: "blur(0px)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          animation={[
            { y: 0, opacity: 1, playScale: [0.2, 0.3] },
            { opacity: 0.1, blur: "20px", playScale: [0.6, 0.7] },
          ]}
        >
          <Lu />
          <Heart />
          <Han />
        </Parallax>
      </ScrollOverPack>
    </div>
  );
}

export default App;
