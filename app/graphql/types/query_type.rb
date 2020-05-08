module Types
  class QueryType < Types::BaseObject

    single_field User, :user, UserType, false
    collection_field User, :users, [UserType], false

    single_field Workout, :workout, WorkoutType, false
    collection_field Workout, :workouts, [WorkoutType], false

    single_field Exercise, :exercise, ExerciseType, false
    collection_field Exercise, :exercises, [ExerciseType], false

    single_field ExerciseSet, :exercise_set, ExerciseSetType, false
    collection_field ExerciseSet, :exercise_sets, [ExerciseSetType], false
  end
end
