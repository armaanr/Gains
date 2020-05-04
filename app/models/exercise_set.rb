class ExerciseSet < ApplicationRecord
  has_one :exercise
  has_one :workout
end
