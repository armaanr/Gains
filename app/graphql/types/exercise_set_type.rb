module Types
  class ExerciseSetType < Types::BaseObject
    field :id, ID, null: false
    field :exercise, ExerciseType, null: false
    field :workout, WorkoutType, null: false
    field :reps, Integer, null: false
    field :order, Integer, null: false
    field :rest_interval_seconds, Integer, null: false
    field :work_interval_seconds, Integer, null: false

    def exercise
      object.exercise
    end

    def workout
      object.workout
    end
  end
end
