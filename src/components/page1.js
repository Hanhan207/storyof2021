import '../App.css';
import  Texty from 'rc-texty';
// import ScrollAnim from 'rc-scroll-anim';


function Page1(e){
    let month = '11'
    let day = '4'
    let count = '四'
    let weather = 'sunny'
    let content = '特意穿了白色衣服'
    return(<div className='dateP1'>
        
        <Texty >{month}月{day}日</Texty>
        <Texty >第{count}次见面</Texty>
        <Texty >{content}</Texty>
    </div>)
}

export default Page1