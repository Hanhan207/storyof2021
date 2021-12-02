import "../App.css";
import Texty from "rc-texty";
import { Parallax } from "rc-scroll-anim";
// import ScrollAnim from 'rc-scroll-anim';

function Face(e) {
    const scale =[0.6,0.9]
  return (<div>
    <div style={{display:'flex',flexDirection:'row',marginTop:'45%',alignItems:'start'}}>
      <Parallax
        style={{
          transform: "translateY(-60px)",
          fontFamily:'Song',
          fontSize:'18px',
          opacity: 0,
        }}
        animation={{ y: 0, opacity: 1, playScale:scale }}
      >
        今天是我们第几次
      </Parallax>
      <Parallax
        style={{
        //   transform: "translateY(-60px)",
          fontFamily:'Song',
          fontSize:'72px',
          color: "#4864C5",
        //  fontWeight:'bold'
        //   background:'red'
        }}
        animation={{ y: 0,fontSize:'18px',playScale:scale }}
      >
        见面
      </Parallax>
      <Parallax
        style={{
          transform: "translateY(-60px)",
          fontFamily:'Song',
          fontSize:'18px',
          opacity: 0,
        }}
        animation={{ y: 0, opacity: 1, playScale:scale }}
      >
        ?
      </Parallax>
    </div>
    <Parallax
        style={{
        //   transform: "translateY(-60px)",
          fontFamily:'Song',
          fontSize:'12px',
          opacity: 0,
        }}
        animation={{ y: 0, opacity: 1, playScale:scale }}
      >
        How many times have we met this year ?
      </Parallax>
    </div>
  );
}

export default Face;
