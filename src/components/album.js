import "../App.css";
import Texty from "rc-texty";
// import ScrollAnim from 'rc-scroll-anim';
import { Parallax } from "rc-scroll-anim";
import ticket_r from "../assets/ticket_r.png";
import ticket_l from "../assets/ticket_l.png";

function Album() {
  const photos = [
    {
      id: 1,
      src: require("../assets/photos/p01.png").default,
      top: "-0.31px",
      left: "-31px",
    },
    {
      id: 2,
      src: require("../assets/photos/p02.png").default,
      top: "-19px",
      left: "125.61px",
    },
    {
      id: 3,
      src: require("../assets/photos/p03.png").default,
      top: "-19.31px",
      left: "240px",
    },
    {
        id: 4,
        src: require("../assets/photos/p04.png").default,
        top: "132.69px",
        left: "185px",
      },
      {
        id: 5,
        src: require("../assets/photos/p05.png").default,
        top: "187px",
        left: "344.55px",
      },
      {
        id: 6,
        src: require("../assets/photos/p06.png").default,
        top: "268.81px",
        left: "85px",
      },
      {
        id: 7,
        src: require("../assets/photos/p07.png").default,
        top: "165px",
        left: "62.85px",
      },
      {
        id: 8,
        src: require("../assets/photos/p08.png").default,
        top: "340px",
        left: "8.8px",
      },
      {
        id: 9,
        src: require("../assets/photos/p09.png").default,
        top: "435px",
        left: "105.8px",
      },
      {
        id: 10,
        src: require("../assets/photos/p10.png").default,
        top: "444.61px",
        left: "234px",
      },
      {
        id: 11,
        src: require("../assets/photos/p11.png").default,
        top: "500.08px",
        left: "176px",
      },
      {
        id: 12,
        src: require("../assets/photos/p12.png").default,
        top: "664.08px",
        left: "265px",
      },
      {
        id: 13,
        src: require("../assets/photos/p13.png").default,
        top: "644.17px",
        left: "194.61px",
      },
      {
        id: 14,
        src: require("../assets/photos/p14.png").default,
        top: "682.31px",
        left: "29px",
      },
      {
        id: 15,
        src: require("../assets/photos/p15.png").default,
        top: "587px",
        left: "-45.63px",
      },
      
  ];

  function time(index){
    //   console.log(index)
      var start = 0.1+index/10
      var end = 0.4+index/10
      var time = [start,end]
      console.log(time)
      return [start,end]
  }

  return (
    <div style={{height:'100%',width:'100%'}}>
      {photos.map((photo) => (
        <Parallax key={photo.id}
          style={{
            transform: " translateX(40px)",
            opacity: 0,
           
            
          }}
          animation={{
            x: 0,
            opacity: 1,
            playScale:time(photo.id),
          }}
        >
         <img src={photo.src} style={{ position: "absolute", top: photo.top, left: photo.left }} />
        </Parallax>
      ))}
      
    </div>
  );
}

export default Album;
