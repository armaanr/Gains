import React, {useState, useEffect} from 'react';

const TimerDisplay = ({restInterval, workInterval, numberOfSets}) => {
  const workoutIntervals = {
    work: workInterval,
    rest: restInterval
  };

  const [currentInterval, setCurrentInterval] = useState('work');
  const [currentMin, setCurrentMin] = useState(workoutIntervals[currentInterval]['min']);
  const [currentSec, setCurrentSec] = useState(workoutIntervals[currentInterval]['sec']);
  const [currentSets, setCurrentSets] = useState(numberOfSets);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let runTimer = null;
    if(timerOn && currentSets > 0) {
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
        let newInterval = (currentInterval === 'work') ? 'rest' : 'work';
        setCurrentMin(workoutIntervals[newInterval]['min']);
        setCurrentSec(workoutIntervals[newInterval]['sec']);
        if (currentInterval === 'rest') {
          setCurrentSets(currentSets - 1);
          if (currentSets === 1) {
            setCurrentMin(0);
            setCurrentSec(0);
          }
        }
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