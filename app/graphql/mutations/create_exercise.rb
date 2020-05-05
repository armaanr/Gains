module Mutations
  class CreateExercise < BaseMutation
    # arguments passed to the `resolve` method
    argument :name, String, required: true

    # return type from the mutation
    field :exercise, Types::ExerciseType, null: false

    def resolve(name: nil)
      exercise = Exercise.create(name: name)
      { exercise: exercise }
    end
  end
end