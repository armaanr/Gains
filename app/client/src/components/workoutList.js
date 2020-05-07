import React from 'react';
import gql from 'graphql-tag';
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

const WorkoutList = () => {
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div>
    <ul>
      {
        data && data['workouts'].map((workout, i) => {
          return <li key={`workout-${i}`}>{workout.name}</li>
        })
      }
    </ul>
  </div>
};

export default WorkoutList;