module Mutations
  class CreateWorkout < BaseMutation
    # arguments passed to the `resolve` method
    argument :name, String, required: true

    # return type from the mutation
    field :workout, Types::WorkoutType, null: false

    def resolve(**args)
      workout = Workout.create(**args)
      { workout: workout }
    end
  end
end