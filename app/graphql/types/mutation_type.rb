module Types
  class MutationType < Types::BaseObject
    field :create_workout, mutation: Mutations::CreateWorkout
    field :create_exercise, mutation: Mutations::CreateExercise
  end
end
