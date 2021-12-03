import "../App.css";
import { Parallax } from "rc-scroll-anim";

function Mad() {
  return (
    <div className="shude">
      <Parallax
        className="up"
        animation={{ y: 0, opacity: 1, playScale: [0.55, 0.7] }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="146"
          height="83"
          fill="none"
          viewBox="0 0 146 83"
          style={{ marginBottom: -30 }}
        >
          <path
            stroke="#E98102"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M48.5 71c-.667-4.166-1.1-13.6 2.5-18m10 0c-4-3 3-23 15-8.5m26 8.5v6m11 17.5l-3.5 5.5m-76-11C31.833 55 38 26 76 38c6.197-3.873 18.334-7.746 27.022 0M125 61c6.5-8-2-19.5-15.5-13-1.713-4.508-3.949-7.746-6.478-10M1 61h7c1.333-7.333 8.3-19.2 25.5-8m69.522-15c3.057-1.76 6.465-2.828 9.978-3.262M139 76.5c16.093-27.104-6.554-44.164-26-41.762M42.5 28c2.846-7.114 10.896-17.5 20.583-12m5.417 4.5c-1.872-2.048-3.682-3.515-5.417-4.5m0 0C71-4 119.5-7.5 113 34.738M95.5 10.5L102 16"
          />
        </svg>
      </Parallax>
      <Parallax
        className="up "
        animation={{ y: 0, opacity: 1, playScale: [0.4, 0.6] }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="51"
          fill="none"
          viewBox="0 0 42 51"
        >
          <path
            stroke="#BEB56D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1.5 33.5L10 50m7-9.5V50m5.5-16.5V50m4-9.5V50M41 33.5L33.5 50M17 31.5V23m5.5 5V1m4 30.5v-6m7 10.5V25.5M10 21v-8.5m7 3.5V7.5M26.5 21v-8.5"
          />
        </svg>
      </Parallax>
      <Parallax
        className="up"
        animation={{ y: 0, opacity: 1, playScale: [0.2, 0.5] }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="184"
          height="64"
          fill="none"
          viewBox="0 0 184 64"
        >
          <path
            stroke="#BEB56D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M1.5 62.5L42 4l20.5 25m-39 14.5L34 29l8 6 4.5-6L56 42m-4 6.5l30.5-47H85M139.5 59L101 1.5h-2M114.5 29l11.393-14.5m36.607 34L145 26m-19.107-11.5L131 8l5.056 6.5m-10.163 0L131 21l5.056-6.5m0 0L145 26m0 0l6.5-9 10 13.5m5 4.5l3 5m3 5L183 59m-15-31.5l13 16m-96-42V8m0-6.5h8m0 0v26m0-26h6m0 0V8m0 3v6m-21 7L60.5 51m75.556-23.5l12.444 16M40.5 19l3-3"
          />
        </svg>
      </Parallax>
    </div>
  );
}

export default Mad;
