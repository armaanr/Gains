class Exercise < ApplicationRecord
  validates :name, uniqueness: { case_sensitive: false }
end
