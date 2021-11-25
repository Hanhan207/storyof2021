import logo from './logo.svg';
import './App.css';
import DateCom from './components/date'
import  Texty from 'rc-texty';
import ScrollAnim from 'rc-scroll-anim';
import { useEffect } from 'react';
import { Line,Column} from '@antv/g2plot';
const ScrollOverPack = ScrollAnim.OverPack;
const scrollScreen = ScrollAnim.scrollScreen



const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
];


function App() {
  
  const windowheight = document.documentElement.clientHeight
  // scrollScreen.init({
  //   docHeight:windowheight*2.4
  // })

  useEffect(() => {
    
const columnPlot = new Column('lineCon', {
  data,
  xField: 'type',
  yField: 'sales',
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle', // 'top', 'bottom', 'middle',
    // 配置样式
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    type: {
      alias: '类别',
    },
    sales: {
      alias: '销售额',
    },
  },
});

columnPlot.render();

  })
  return (
    <div className="App">
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      {/* <div id="lineCon"></div> */}
      </ScrollOverPack>
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      <DateCom/>
      </ScrollOverPack>
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      
      <DateCom/>
      </ScrollOverPack>
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      <div id="lineCon"></div>
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      </ScrollOverPack>
    
    </div>
  );
}

export default App;
