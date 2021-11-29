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
const data = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 },
  ];

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
        //   content: '{name}',
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