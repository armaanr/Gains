module Types
  class QueryType < Types::BaseObject
    field :users, [UserType], null: false
    field :workouts, [WorkoutType], null: false

    def users
      User.all
    end

    def workouts
      Workout.all
    end
  end
end
