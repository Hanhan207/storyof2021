import "../App.css";
import Texty from "rc-texty";
import { Parallax } from "rc-scroll-anim";
// import ScrollAnim from 'rc-scroll-anim';

function Face(e) {
  return (
    <div style={{display:'flex',flexDirection:'row',background:'blue'}}>
      <Parallax
        style={{
          transform: "translateY(40px)",
          opacity: 0,
        }}
        animation={{ y: 0, opacity: 1, playScale: [0.6, 0.8] }}
      >
        今天是我们第几次
      </Parallax>
      <Parallax
        style={{
          transform: "translateX(40px)",
          fontSize:'60px',
          color: "#4864C5",
          background:'red'
        }}
        animation={{ x: 0, fontSize:'18px', playScale: [0.6, 0.8] }}
      >
        见面
      </Parallax>
    </div>
  );
}

export default Face;
