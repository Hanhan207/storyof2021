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
    <div className="daterapper">
      <Parallax
        className="up"
        animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
      >
        <div className="linebolck dateP1">
          <div>
            {info.month}月{info.day}日
          </div>
          {info.weather}
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
        {info.content}
      </Parallax>
      <Parallax
        className="up"
        animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
        style={{ width: "80%", borderBottom: "solid", margin: "12px" }}
      ></Parallax>
    </div>
  );
}

export default DateCom;
