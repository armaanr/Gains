import React from 'react';
import './App.css';
import Timer from './components/timer'
import WorkoutList from './components/workoutList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Time</h1>
      </header>
      <WorkoutList/>
      <Timer/>
    </div>
  );
}

export default App;
