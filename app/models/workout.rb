class Workout < ApplicationRecord
  has_many :exercise_sets

  validates :name, uniqueness: { case_sensitive: false }
end
