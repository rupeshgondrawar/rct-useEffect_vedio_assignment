
import "./App.css";
import {useRef} from "react"

function App() {

  const ref = useRef(null);

  const onPlay=()=>{
    ref.current.play();
  }
  const onPause=()=>{
    ref.current.pause();
  }
  console.log(Date.now())

  return (
    <div className="App">
      <h1>video assignment</h1>
      <video ref={ref} controls width="250">
        <source
          src="https://www.w3schools.com/html/movie.wbm"
          type="video/webm"
        />

        <source
          src="https://www.w3schools.com/html/movie.mp4"
          type="video/mp4"
        />
      </video>

      <div>
        <button onClick={onPlay}>play</button>
        <button onClick={onPause}>pause</button>
        <button>skip</button>
      </div>
    </div>
    
  );
}

export default App;
