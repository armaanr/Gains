import React from 'react';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';

const GET_WORKOUTS = gql`
  {
    workouts {
      id
      name
      exerciseSets {
        id
      }
    }
  }
`;

const styles = {
  list: {
    listStyle: 'none',
  },
  workoutList: {
    width: '100%',
  },
};

const WorkoutList = ({classes}) => {
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div className={classes.workoutList}>
    <ul className={classes.list}>
      {
        data && data['workouts'].map((workout, i) => {
          return <li key={`workout-${i}`}>{workout.name}</li>
        })
      }
    </ul>
  </div>
};

export default withStyles(styles)(WorkoutList);