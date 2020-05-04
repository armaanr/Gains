module Types
  class WorkoutType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :exercise_sets, [ExerciseSetType], null:false

    def exercise_sets
      object.exercise_sets
    end
  end
end
