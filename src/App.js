
import './App.css';
import { useState } from 'react';


function App() {
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [speed, setSpeed] = useState();

  function handleDistance(e) {
    // console.log(e.target.value)
    setDistance(e.target.value);
  }
  function handleTime(e) {
    setTime(e.target.value);
  }
  function calculateSpeed() {
    setSpeed(distance / time);
  }
  function clearSpeed() {
    setSpeed();
  }


  return (
    <div className="App">
      <h1>Speed Calculator</h1>


      <div className="input_div">
       <span><input type="number" placeholder="Distance" value={distance} onChange={handleDistance} /> </span> 
        <input type="number" placeholder="Time" value={time} onChange={handleTime} />
      </div>

      <div className='button_div'>
        <span> <button onClick={calculateSpeed}>Calculate Speed</button> </span>
        <span><button onClick={clearSpeed}>Clear Speed</button></span>
      </div>

      <div>
        <h1>{speed <= 60 ? `Slow ${speed} km/hr.`
          : speed > 60 && speed < 100 ? `Fast ${speed} km/hr.`
          : speed >= 100 ? `Very Fast {speed} km/hr.`
          : null}</h1>
     </div>


    </div>
  )

}
export default App
