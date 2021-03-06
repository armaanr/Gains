import React, { useState } from 'react';
import TimeInterval from './inputs/timeInterval';
import TimerDisplay from './timerDisplay';
import { withStyles } from '@material-ui/core/styles';

const DEFAULT_INTERVAL = { min: 0, sec: 0};

const styles = {
  intervals: {
    padding: '1rem',
  }
};

const Timer = ({classes}) => {
  const [restInterval, setRestInterval] = useState(DEFAULT_INTERVAL);
  const [workInterval, setWorkInterval] = useState(DEFAULT_INTERVAL);
  const [numberOfSets, setNumberOfSets] = useState(1);
  const [startTimer, setStartTimer] = useState(false);

  const onTimeChange = (interval, setInterval, keyToSet) => (e) => {
    let newInterval = { ...interval };
    let regex = /^[0-9]$|^[0-5][0-9]$|^$/;
    let value = e.target.value;

    if(value.match(regex)){
      newInterval[keyToSet] = value;
      setInterval(newInterval);
    }
  };

  const onBlur = (interval, setInterval, keyToSet) => (e) => {
    let newInterval = { ...interval };
    let value = e.target.value;

    if(value.length === 0){
      newInterval[keyToSet] = 0;
      setInterval(newInterval);
    }
  };

  return (
    <div id='intervalTracker'>
      <div className={classes.intervals}>
        <h2>Rest:</h2>
        <TimeInterval {...{
          id: "restInterval",
          minutes: restInterval['min'],
          seconds: restInterval['sec'],
          onMinuteChange: onTimeChange(restInterval, setRestInterval, 'min'),
          onSecondChange: onTimeChange(restInterval, setRestInterval, 'sec'),
          onMinuteBlur: onBlur(restInterval, setRestInterval, 'min'),
          onSecondBlur: onBlur(restInterval, setRestInterval, 'sec')
        }}/>
      </div>
      <div className={classes.intervals}>
        <h2>Work:</h2>
        <TimeInterval {...{
          id: "workInterval",
          minutes: workInterval['min'],
          seconds: workInterval['sec'],
          onMinuteChange: onTimeChange(workInterval, setWorkInterval, 'min' ),
          onSecondChange: onTimeChange(workInterval, setWorkInterval, 'sec' ),
          onMinuteBlur: onBlur(workInterval, setWorkInterval, 'min'),
          onSecondBlur: onBlur(workInterval, setWorkInterval, 'sec')
        }}/>
      </div>
      <div>
        <h2>Sets:</h2>
        <input
          type="number"
          name="minutes"
          onChange={(e) => {if(e.target.value > 0) setNumberOfSets(e.target.value)}}
        />
      </div>
      <div>
        {startTimer ? <TimerDisplay {...{
          restInterval: restInterval,
          workInterval: workInterval,
          numberOfSets: numberOfSets
        }}/> : ''}
      </div>
      <button onClick={() => {setStartTimer(!startTimer)}}>
        {startTimer ? 'Stop' : 'Start'}
      </button>
    </div>
  )
};

export default withStyles(styles)(Timer)