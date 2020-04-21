import React from 'react';
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

const TimeInterval = ({id, classes, minutes='', seconds='', onMinuteChange, onSecondChange}) => {
  return <div id={id} className={classes.timeInterval}>
    <input
      type="number"
      name="minutes"
      onChange={onMinuteChange}
      value={minutes}
    />
    <p>m</p>

    <input
      type="number"
      name="seconds"
      onChange={onSecondChange}
      value={seconds}
    />
    <p>sec</p>
  </div>
};

export default withStyles(styles)(TimeInterval);