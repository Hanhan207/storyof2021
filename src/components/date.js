import "../App.css";
import { Parallax } from "rc-scroll-anim";

const font ="'Noto Serif SC', serif"

function DateCom(e) {
  let info = e.data;
  return (
    <div style={{ align: "center", width: "80%" }}>
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
          animation={{
            y: 0,
            width: "240px",
            opacity: 1,
            playScale: [0.5, 0.8],
          }}
          style={{
            width: "0px",
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
          fontSize: "48px",
          fontFamily: font,
          letterSpacing: "3px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        animation={[
          { y: 0, opacity: 1, playScale: [0.2, 0.3] },
          { opacity: 0.1, blur: "10px", playScale: [0.3, 0.5] },
        ]}
      >
        <div>
          No<span style={{ color: "#4864C5" }}>.</span>
          {info.countN}
        </div>
        <div className="linebolck" style={{ marginTop: "30px" }}>
          <Parallax
            style={{
              transform: "translateX(-20px)",
            }}
            animation={[{ x: 0, playScale: [0.2, 0.5] }]}
          >
            <img style={{ height: "70px" }} src={info.lusrc} alt="" />
          </Parallax>
          <Parallax
            style={{
              transform: "translateY(20px)",
              marginLeft: "-10%",
              marginRight: "-10%",
            }}
            animation={[{ y: -25, opacity: 1, playScale: [0.2, 0.5] }]}
          >
            <img style={{ width: "50px" }} src={info.midsrc} alt="" />
          </Parallax>
          <Parallax
            style={{
              transform: "translateX(20px)",
            }}
            animation={[{ x: 0, opacity: 1, playScale: [0.2, 0.5] }]}
          >
            <img style={{ height: "70px" }} src={info.hansrc} alt="" />
          </Parallax>
        </div>
      </Parallax>
    </div>
  );
}

export default DateCom;
