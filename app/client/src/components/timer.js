import React, { useState } from 'react';
import TimeInterval from './inputs/timeInterval';
import { withStyles } from '@material-ui/core/styles';

const DEFAULT_INTERVAL = {min: 0, sec: 0};

const styles = {
  intervals: {
    padding: '1rem',
  }
};

const Timer = ({classes}) => {
  const [restInterval, setRestInterval] = useState(DEFAULT_INTERVAL);
  const [workInterval, setWorkInterval] = useState(DEFAULT_INTERVAL);

  const onTimeChange = (interval, setInterval, keyToSet) => (e) => {
    let newInterval = { ...interval };
    let regex = /^[0-9]$|^[0-5][0-9]$/;
    let value = e.target.value;

    if( (value === '') || (value.match(regex))){
      newInterval[keyToSet] = value;
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
          onMinuteChange: onTimeChange(restInterval, setRestInterval, 'min' ),
          onSecondChange: onTimeChange(restInterval, setRestInterval, 'sec' ),
        }}/>
      </div>
      <div className={classes.intervals}>
        <h2>Work:</h2>
        <TimeInterval {...{
          id: "restInterval",
          minutes: workInterval['min'],
          seconds: workInterval['sec'],
          onMinuteChange: onTimeChange(workInterval, setWorkInterval, 'min' ),
          onSecondChange: onTimeChange(workInterval, setWorkInterval, 'sec' ),
        }}/>
      </div>
      <div>
        {displayClock({})}
      </div>
      <button onClick={setInterval}>Start</button>
    </div>
  )
};

const displayClock = () => {
  return <h1>{`${0}:${0}`}</h1>
};


export default withStyles(styles)(Timer)