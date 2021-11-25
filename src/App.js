import logo from './logo.svg';
import './App.css';
import  Texty from 'rc-texty';
import ScrollAnim from 'rc-scroll-anim';
const ScrollOverPack = ScrollAnim.OverPack;

function App() {
  const windowheight = document.documentElement.clientHeight
  return (
    <div className="App">
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      </ScrollOverPack>
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      </ScrollOverPack>
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      </ScrollOverPack>
      <ScrollOverPack className='container'  style={{height:windowheight*0.6}}>
      <Texty className='titleP0'>How many time have we met this year?</Texty>
      </ScrollOverPack>
    
    </div>
  );
}

export default App;
