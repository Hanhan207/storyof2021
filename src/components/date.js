import "../App.css";
import Texty from "rc-texty";
import { Parallax } from "rc-scroll-anim";
// import ScrollAnim from 'rc-scroll-anim';

function DateCom(e) {
  let info = e.data;
  let text = "22<h1>100+</h1>2222";
  var ani = "y: 0, opacity: 1, playScale: [0.5, 0.8]";
  var month = "11";
  var day = "4";
  var count = "四";
  var weather = "sunny";
  var content = "特意穿了白色衣服";
  return (
    <div style={{ align: "center", width: "80%", marginBottom: "-25%" }}>
      <div className="daterapper">
        <Parallax
          className="up"
          animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
        >
          <div className="linebolck dateP1">
            <div>
              {info.monthSC} 月 {info.daySC} 日
            </div>
            {/* {info.weather} */}
          </div>
        </Parallax>
        <Parallax
          className="dateP2 up"
          animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
        >
          第{info.count}次见面
        </Parallax>
        <Parallax
          className="dateP1 up"
          animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
        >
          <span style={{ color: "#4864C5" }}>“</span>
          {info.content}
          <span style={{ color: "#4864C5" }}>”</span>
        </Parallax>
        <Parallax
          className="up"
          animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{
            width: "80%",
            borderBottom: "solid",
            margin: "12px",
            borderColor: "#BEB56D",
            borderWidth: "2px",
          }}
        ></Parallax>
      </div>
      <Parallax
        style={{
          transform: "translateY(30px)",
          opacity: 0,
          filter: "blur(0px)",
          position: "relative",
          top: "-80px",
          fontSize: "48px",
          fontFamily: "Song",
          letterSpacing:'3px'
        }}
        animation={[
          { y: 0, opacity: 1, playScale: [0.2, 0.5] },
          { opacity: 0.2, blur: "10px", playScale: [0.3, 0.5] },
        ]}
      >
        No<span style={{color:'#4864C5'}}>.</span>{info.countN}
      </Parallax>
    </div>
  );
}

export default DateCom;
