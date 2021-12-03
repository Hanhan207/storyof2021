import "../App.css";
import { Parallax } from "rc-scroll-anim";

function Album(e) {
  const height = 812;
  const widht = "375px";
  const photos = [
    {
      id: 1,
      src: require("../assets/photos/p01.png").default,
      top: "-37.31px",
      left: "-54px",
    },
    {
      id: 2,
      src: require("../assets/photos/p02.png").default,
      top: "-35px",
      left: "61.61px",
    },
    {
      id: 3,
      src: require("../assets/photos/p03.png").default,
      top: "-19.31px",
      left: "229px",
    },
    {
      id: 4,
      src: require("../assets/photos/p04.png").default,
      top: "75px",
      left: "224px",
    },
    {
      id: 5,
      src: require("../assets/photos/p05.png").default,
      top: "187px",
      left: "225px",
    },
    {
      id: 6,
      src: require("../assets/photos/p06.png").default,
      top: "127px",
      left: "85px",
    },
    {
      id: 7,
      src: require("../assets/photos/p07.png").default,
      top: "165px",
      left: "-105.15px",
    },
    {
      id: 8,
      src: require("../assets/photos/p08.png").default,
      top: "290px",
      left: "-25px",
    },
    {
      id: 9,
      src: require("../assets/photos/p09.png").default,
      top: "350px",
      left: "105.8px",
    },
    {
      id: 10,
      src: require("../assets/photos/p10.png").default,
      top: "360px",
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
      top: "600px",
      left: "265px",
    },
    {
      id: 13,
      src: require("../assets/photos/p13.png").default,
      top: "585px",
      left: "60px",
    },
    {
      id: 14,
      src: require("../assets/photos/p14.png").default,
      top: "540px",
      left: "-38px",
    },
    {
      id: 15,
      src: require("../assets/photos/p15.png").default,
      top: "460px",
      left: "-45.63px",
    },
  ];

  function time(index) {
    var start = 0.1 + index / 20;
    var end = 0.2 + index / 20;
    return [start, end];
  }

  return (
    <div
      style={{
        height: height * 1.3,
        marginTop: "50px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "realative",
          overflowX: "hidden",
          overflowY: "visible",
          paddingTop: "40px",
        }}
      >
        {photos.map((photo) => (
          <Parallax
            key={photo.id}
            style={{
              transform: " translateY(40px)",
              opacity: 0,
            }}
            animation={{
              y: 0,
              opacity: 1,
              playScale: time(photo.id),
            }}
          >
            <img
              src={photo.src}
              style={{ position: "absolute", top: photo.top, left: photo.left }}
              alt=""
            />
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default Album;
