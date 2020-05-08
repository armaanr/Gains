import React from 'react';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';

const GET_EXERCISES = gql`
  {
    exercises {
      id
      name
    }
  }
`;

const styles = {
  list: {
    listStyle: 'none',
  },
  exerciseList: {
    width: '100%',
  },
};

const ExerciseList = ({classes}) => {
  const { loading, error, data } = useQuery(GET_EXERCISES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div className={classes.exerciseList}>
    <ul className={classes.list}>
      {
        data && data['exercises'].map((workout, i) => {
          return <li key={`workout-${i}`}>{workout.name}</li>
        })
      }
    </ul>
  </div>
};

export default withStyles(styles)(ExerciseList);