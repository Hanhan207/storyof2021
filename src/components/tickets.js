import "../App.css";
import Texty from "rc-texty";
// import ScrollAnim from 'rc-scroll-anim';
import { Parallax } from "rc-scroll-anim";
import ticket_r from "../assets/ticket_r1.png";
import ticket_l from "../assets/ticket_l1.png";

function Tickets() {
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
      </Parallax>
    </div>
  );
}

export default Tickets;
