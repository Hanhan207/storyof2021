import React,{useEffect} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "./styles.css"
import '../App.css'


export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  var posters = []

  return (
    <div ref={sliderRef} className="keen-slider" style={{padding:'25px'}} >
        <img  src={require(`../assets/movies/0.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/1.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/2.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/3.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/4.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/5.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/6.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/7.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/8.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/9.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/10.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/11.webp`).default} alt="" className="poster keen-slider__slide"/>
        <img  src={require(`../assets/movies/12.webp`).default} alt="" className="poster keen-slider__slide"/>
    </div>
  )
}