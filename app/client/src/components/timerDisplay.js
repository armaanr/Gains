import React, {useState, useEffect} from 'react';

const TimerDisplay = ({restInterval, workInterval}) => {
  const workoutIntervals = [workInterval, restInterval];

  const [currentInterval, setCurrentInterval] = useState(0);
  const [currentMin, setCurrentMin] = useState(workoutIntervals[currentInterval]['min']);
  const [currentSec, setCurrentSec] = useState(workoutIntervals[currentInterval]['sec']);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let runTimer = null;
    if(timerOn) {
      if (currentMin > 0 || currentSec > 0) {
        runTimer = setInterval(() => {
          if (currentSec === 0) {
            if (currentMin > 0) {
              setCurrentSec(59);
              setCurrentMin(currentMin - 1);
            }
          }
          else {
            setCurrentSec(currentSec - 1);
          }
        }, 1000);
      } else {
        let newInterval = (currentInterval + 1) % 2;
        setCurrentMin(workoutIntervals[currentInterval]['min']);
        setCurrentSec(workoutIntervals[currentInterval]['sec']);
        setCurrentInterval(newInterval);
      }
    }
    else {
      clearInterval(runTimer);
    }
    return () => clearInterval(runTimer);
  }, [timerOn, currentSec]);


  return <div>
    <h1>{currentMin}:{currentSec}</h1>
    <button onClick={() => {
      setTimerOn(true)
    }}>Play
    </button>
    <button onClick={() => {
      setTimerOn(false)
    }}>Pause
    </button>
  </div>
};

export default TimerDisplay;