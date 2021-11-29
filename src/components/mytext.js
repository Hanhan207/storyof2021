import "../App.css";
import Texty from "rc-texty";
import { Parallax } from "rc-scroll-anim";
// import ScrollAnim from 'rc-scroll-anim';

function Mytext(e) {
  var content = e.content;
//   console.log(content);

  return (
    <Parallax
      className="up"
      animation={{ y: 0, opacity: 1, playScale: [0.2, 0.5] }}
    >
      <div
        className="mycontent"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </Parallax>
  );
}

export default Mytext;
