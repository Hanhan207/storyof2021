import "../App.css";
import { useEffect } from "react";
import { Parallax } from "rc-scroll-anim";
import ticket_r from "../assets/ticket_r1.png";
import ticket_l from "../assets/ticket_l1.png";
import { WordCloud } from "@antv/g2plot";
import pic from '../assets/Movies and TV-1.png'

const movies = [
  {
    id: "1",
    name: "心灵奇旅",
    rate: 8.7,
  },
  {
    id: "2",
    name: "温暖的抱抱",
    rate: 5.3,
  },
  {
    id: "3",
    name: "消失的情人节",
    rate: 7.2,
  },
  {
    id: "4",
    name: "缉魂",
    rate: 6.9,
  },
  {
    id: "5",
    name: "同学麦娜斯",
    rate: 7.9,
  },
  {
    id: "6",
    name: "哪吒重生",
    rate: 6.9,
  },
  {
    id: "7",
    name: "哥斯拉大战金刚",
    rate: 6.3,
  },
  {
    id: "8",
    name: "指环王三",
    rate: 9.3,
  },
  {
    id: "9",
    name: "革命者",
    rate: 7.5,
  },
  {
    id: "10",
    name: "长津湖",
    rate: 7.4,
  },
  {
    id: "11",
    name: "沙丘",
    rate: 7.8,
  },
  {
    id: "12",
    name: "007-无暇赴死",
    rate: 6.7,
  },
  {
    id: "13",
    name: "雄狮少年",
    rate: 8.2,
  },
];

function Tickets() {
  useEffect(() => {
    const wordCloud = new WordCloud("movie", {
      data: movies,
      wordField: "name",
      weightField: "rate",
      color: "#E98102",
      // colorField: 'tag',
      legend: {},
      // imageMask: 'https://gw.alipayobjects.com/zos/antfincdn/Qw7Xbn76kM/53176454-747c-4f0a-a9e5-936aa66a0082.png',
    imageMask:pic,
      wordStyle: {
        fontFamily: "'Noto Serif SC', serif",
        fontWeight: "normal",
        fontSize: [10, 28],
      },
      // 设置交互类型
      interactions: [{ type: "element-active" }],
      state: {
        active: {
          // 这里可以设置 active 时的样式
          style: {
            lineWidth: 6,
            color: "#E98102",
          },
        },
      },
    });

    wordCloud.render();
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 16,
        overflow: "hidden",
      }}
    >
      <Parallax
        id="movie"
        style={{ width: "250px", height: "250px" ,transform:"translateY(30px)",opacity:0}}
        animation={{y:0,opacity:1,playScale:[0.6,0.7]}}
      ></Parallax>
      {/* <Parallax
        style={{ transform: " translateX(-40px)", opacity: 0 }}
        animation={{ x: 0, opacity: 1, playScale: [0.6, 0.8] }}
      >
        <img src={ticket_l} style={{ marginRight: -50 }} alt="" />
      </Parallax>
      <Parallax
        style={{ transform: " translateX(40px)", opacity: 0 }}
        animation={{ x: 0, opacity: 1, playScale: [0.6, 0.7] }}
      >
        <img src={ticket_r} style={{ marginLeft: -50 }} alt="" />
      </Parallax> */}
    </div>
  );
}

export default Tickets;
