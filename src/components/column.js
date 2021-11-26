import '../App.css';
// import  Texty from 'rc-texty';
import Column from '@antv/g2plot';
import { useEffect } from 'react';
// import ScrollAnim from 'rc-scroll-anim';

const data =[
    {
        Type: "螺蛳粉",
        Count: 8
    },
    {
      Type: "烤肉",
        Count: 7
    },
    {
        Type: "面条",
        Count: 5
    },
    {
        Type: "米线",
        Count: 5
    },
    {
        Type: "烤串",
        Count: 4
    }
  ]

  const colors = ['#F14456','#2149DF','#1BBC6B']

function FoodColumn(){

    useEffect(() => {
        const columnPlot = new Column('lineCon', {
            data,
            xField: 'Type',
            yField: 'Count',
            label: {
              // 可手动配置 label 数据标签位置
              position: 'middle', // 'top', 'bottom', 'middle',
              // 配置样式
              // style: {
              //   fill: '#FFFFFF',
              //   opacity: 0.6,
              // },
            },
            xAxis: {
              label: {
                autoHide: true,
                autoRotate: false,
              },
              
            },
            color: ({ Type }) => {
              if (Type === '螺蛳粉') {
                return colors[0];
              }
              return colors[1];
            },
            meta:{
          
            },
          });
          
          columnPlot.render();
    })
    return(<div>
        <div id="lineCon"></div>
    </div>)
}

export default FoodColumn