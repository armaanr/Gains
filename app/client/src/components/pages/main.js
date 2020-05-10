import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import WorkoutList from '../workoutList';
import Timer from '../timer';


const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row',
  },
  pageSections: {
    width: '50%',
  }
};

const Main = ({classes}) => {
  return <div className={classes.root}>
    <div className={classes.pageSections}>
      <WorkoutList/>
    </div>
    <div className={classes.pageSections}>
      <Timer/>
    </div>
  </div>
};

export default withStyles(styles)(Main);