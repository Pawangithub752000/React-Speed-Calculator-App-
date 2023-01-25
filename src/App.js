
import './App.css';
import {useState} from 'react';


function App(){
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [speed, setSpeed] = useState();

  function handleDistance(e){
    // console.log(e.target.value)
    setDistance(e.target.value);
  }
  function handleTime(e){
    setTime(e.target.value);
  }
  function calculateSpeed(){
  setSpeed(distance/time);
  }
  function clearSpeed(){
  setSpeed();
  }


  return(
    <div className="App">
      <h1>Speed Calculator</h1>


      <div className="input_div">
        <input type="number" placeholder="Distance" value={distance} onChange={handleDistance}/>
        <input type="number" placeholder="Time" value={time} onChange={handleTime}/>
      </div>

      <div className='button_div'>
        <button onClick={calculateSpeed}>Calculate Speed</button>
        <button onClick={clearSpeed}>Clear Speed</button>
      </div>

      <div>{speed}
      
      
      
      </div>


    </div>
  )

}
export default App
