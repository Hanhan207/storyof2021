import logo from "./logo.svg";
import "./App.css";
import { useEffect,useState } from "react";
//自设组件
import DateCom from "./components/date";
import FoodColumn from "./components/column";
//动画库
import Texty from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);

// import { Line,Column} from '@antv/g2plot';
const ScrollOverPack = ScrollAnim.OverPack;
const scrollScreen = ScrollAnim.scrollScreen;

const colors = ["#F14456", "#2149DF", "#1BBC6B"];



function Mycontent(){
  return(
    // <Texty>How many times?</Texty>
    <h4>How many times?</h4>
  )
}

function App() {
  const windowheight = document.documentElement.clientHeight;
const [mode,setMode] = useState(null)
const [linedata,setlinedata] = useState('30% 70%')
const mypath = ['M541.5,36.45313c-5,6 -8,100 -95,128c-87,28 -66,32 -173,37c-107,5 -143,106 -139,146','M10,10c65,50,115,50,180,0']
const [path, setpath] = useState(mypath[0])

  useEffect(() => {
  });

  
function gundaole(e){
  // console.log(e)
  if(e === 'enter'){
    setMode('enter')
    setlinedata('100%')
  }else {
    setlinedata(0)}
  console.log(linedata)
}

function setline(){
  // setlinedata('50% 50%')
  setpath(mypath[0])
}
  return (
    <div className="App">
      {/* P1 */}
      <ScrollOverPack
        className="container"
        style={{ height: windowheight }}
      >
        <Texty className="titleP0">第一页</Texty>
      </ScrollOverPack>
      {/* P2 */}
      <ScrollOverPack
        className="container"
        style={{ height: windowheight, background: colors[2] }}
        
        // onChange={(e)=>setMode(e.mode)}
        // onChange={(e)=>gundaole(e.mode)}
      >
        <Texty className="titleP0">第二页</Texty>
        <button onClick={()=>setline()}>set</button>
        <svg width="200" height="84" version="1.2"
          style={{ display: 'block', margin: 'auto' }}
        >
          <TweenOne
            animation={{ SVGDraw: linedata , duration: 500 }}
            style={{ fill: 'none', strokeWidth: 10, stroke: '#FFF' }}
            component="path"
            d={path}
          />
        </svg>
      </ScrollOverPack>
      {/* P3 */}
      <ScrollOverPack
        className="container"
        style={{ height: windowheight, background: colors[1] }}
        
      >
        <Texty className="titleP0">第三页</Texty>
        <QueueAnim  delay={100} type="bottom" interval={700} duration={800}>
        <div key="a"><Mycontent/></div>
    <div key="b"><Mycontent/></div>
    <div key="c"><Mycontent/></div>
    <div key="d"><Mycontent/></div>
        </QueueAnim >
      </ScrollOverPack>
      {/* P4 */}
      <ScrollOverPack
        className="container"
        style={{ height: windowheight , background: colors[0] }}
      >
        {/* <FoodColumn/> */}
        <Texty className="titleP0">第四页</Texty>
        
      </ScrollOverPack>
    </div>
  );
}

export default App;
