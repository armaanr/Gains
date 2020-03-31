import React from 'react';
import './App.css';

let currentInterval = 0;
let restMinutes = 0;
let restSeconds = 0;
let workMinutes = 0;
let workSeconds = 0;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Time</h1>
      </header>
      <div id='intervalTracker'>
        <div>
          <h2>Rest:</h2>
          <input type="number" id="restMinutes"/><p>mins</p>
          <input type="number" id="restSeconds"/><p>secs</p>
        </div>
        <br/>
        <br/>
        <div>
          <h2>Work:</h2>
          <input type="number" id="workMinutes"/><p>mins</p>
          <input type="number" id="workSeconds"/><p>secs</p>
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
  restMinutes = document.getElementById('restMinutes');
  restSeconds = document.getElementById('restSeconds');
  workMinutes = document.getElementById('workMinutes');
  workSeconds = document.getElementById('workSeconds');





  console.error('======restMinutes=======>', restMinutes.value);
  console.error('======restSeconds=======>', restSeconds.value);
  console.error('======workMinutes=======>', workMinutes.value);
  console.error('======workSeconds=======>', workSeconds.value);
};



export default App;
