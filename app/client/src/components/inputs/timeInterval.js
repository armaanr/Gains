import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  timeInterval: {
    width: '100%',
    '& input': {
      width: '15%',
      display: 'inline',
      margin: '2rem'
    },
    '& p': {
      display: 'inline',
    }
  }
};

const TimeInterval = ({id, classes}) => {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const onTimeChange = (setValue) => (e) => {
    const regex = /^[0-9]$|^[0-5][0-9]$/;
    const value = e.target.value;

    if( (value === '') || (value.match(regex))){
      setValue(value);
    }
  };

  return <div id={id} className={classes.timeInterval}>
    <input
      type="number"
      name="minutes"
      onChange={onTimeChange(setMinutes)}
      value={minutes || ''}
    />
    <p>m</p>

    <input
      type="number"
      name="seconds"
      onChange={onTimeChange(setSeconds)}
      value={seconds || ''}
    />
    <p>sec</p>
  </div>
};

export default withStyles(styles)(TimeInterval);