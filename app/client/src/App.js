import React from 'react';
import './App.css';
import TimeInterval from './components/inputs/timeInterval'

let restMinutes = 0;
let restSeconds = 0;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Time</h1>
      </header>
      <div id='intervalTracker'>
        <div>
          <h2>Rest:</h2>
          <TimeInterval {...{id: "restInterval"}}/>
        </div>
        <br/>
        <br/>
        <div>
          <h2>Work:</h2>
          <TimeInterval {...{id: "workInterval"}}/>
        </div>
        <br/>
        <br/>
        <div>
          {displayClock()}
        </div>
        <button onClick={setInterval}>Start</button>
      </div>
    </div>
  );
}

const displayClock = () => {
  return <h1>{`${restMinutes}:${restSeconds}`}</h1>
};

const setInterval = () => {
  restMinutes = document.getElementById('restInterval');
  restSeconds = document.getElementById('workInterval');
};



export default App;
