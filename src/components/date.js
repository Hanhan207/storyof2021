import '../App.css';
import  Texty from 'rc-texty';
import { Parallax } from 'rc-scroll-anim';
// import ScrollAnim from 'rc-scroll-anim';


function DateCom(e){
    let info = e.data
    var month = '11'
    var day = '4'
    var count = '四'
    var weather = 'sunny'
    var content = '特意穿了白色衣服'
    return(
        <Parallax  className='dateP1'
          animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateY(20px)', opacity: 0 }}
        ><div >{info.month}月{info.day}日</div> 
        <div >第{info.count}次见面</div> 
        <div >{info.content}</div>
        <div style={{width:'100%',borderBottom:'solid',margin:'12px'}}/></Parallax>
    )
}

export default DateCom