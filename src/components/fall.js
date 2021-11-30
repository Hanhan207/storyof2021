import '../App.css';
import  Texty from 'rc-texty';
// import ScrollAnim from 'rc-scroll-anim';
import { Pie } from '@antv/g2plot';
import { useEffect } from "react";
import { Parallax } from "rc-scroll-anim";


function Fall(){
    const data2 = [{
        season:'春',
        count:25
    },{
        season:'夏',
        count:25
    },{
        season:'秋',
        count:15
    },{
        season:'冬',
        count:35
    },
]

function getcontent(e){
  console.log('e',e)
}
useEffect(() => {
    const piePlot = new Pie('pie', {
        appendPadding: 10,
        data:data2,
        angleField: 'count',
        colorField: 'season',
        radius: 1,
        // 设置圆弧起始角度
        startAngle: Math.PI,
        endAngle: Math.PI * 1.5,
        label: {
          type: 'inner',
          offset: '-8%',
          content: '{value}次',
          style: { fontSize: 18 },
        },
        interactions: [{ type: 'element-active' }],
        pieStyle: {
          lineWidth: 0,
        },
      });
      
      piePlot.render();
  
})
   
    return(
        <Parallax
        className="up"
        animation={{ y: 0, opacity: 1, playScale: [0.6, 0.8] }}
      >
        <div id="pie" style={{ width: 300, height: 250, margin: 16 }} />
      </Parallax>
    );
}

export default Fall