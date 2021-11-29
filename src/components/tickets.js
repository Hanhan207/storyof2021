import '../App.css';
import  Texty from 'rc-texty';
// import ScrollAnim from 'rc-scroll-anim';
import { Parallax } from "rc-scroll-anim";
import ticket_r from '../assets/ticket_r.png'
import ticket_l from '../assets/ticket_l.png'


function Tickets(){
   
    return(<div style={{display:'flex',flexDirection:'row',marginTop:16}} >
         <Parallax
        style={{transform:' translateX(-40px)',opacity: 0}}
        animation={{ x: 0, opacity: 1, playScale: [0.6, 0.8] }}
      >
        <img src={ticket_r} style={{marginRight:-50}}/>
        </Parallax>
        <Parallax
        style={{transform:' translateX(40px)',opacity: 0}}
        animation={{ x: 0, opacity: 1, playScale: [0.6, 0.7] }}
      >
        <img src={ticket_l} style={{marginLeft:-50}}/>
        </Parallax>
    </div>)
}

export default Tickets