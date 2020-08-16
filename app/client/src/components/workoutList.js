import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

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
  workoutList: {
    display: 'flex',
    flexFlow: 'column',
  },
  list: {
    width: '100%',
    listStyle: 'none',
  },
  listItem: {
    width: '100%',
    borderStyle: 'outset',
    padding: '0.5rem',
    margin: '0.5rem',
    '&:hover': {
      borderStyle: 'inset',
    },
  },
  link: {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
  },
  heading: {
    width: '100%',

  },
};

const WorkoutList = ({classes}) => {
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div className={classes.workoutList}>
    <h2 className={classes.heading}>Workouts</h2>
    <ul className={classes.list}>
      {
        data && data['workouts'].map((workout, i) => {
          return <li className={classes.listItem} key={`workout-${i}`}>
            <Link className={classes.link} to={`/workout/${workout.id}`}>
              {workout.name}
            </Link>
          </li>
        })
      }
    </ul>
  </div>
};

export default withStyles(styles)(WorkoutList);