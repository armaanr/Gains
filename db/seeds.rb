# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

(1..5).each do |i|
  User.create(first_name: "User#{i}", last_name: 'Rai', email: "email#{1}@bobo.com")
end

Exercise.create(name: 'Pushups')
Exercise.create(name: 'Shrugs')
Exercise.create(name: 'Pullups')
Workout.create(name: 'Get Swole')
ExerciseSet.create(reps: 1, order: 1, rest_interval_seconds: 5, work_interval_seconds: 10, exercise_id: 1, workout_id: 1)
ExerciseSet.create(reps: 1, order: 1, rest_interval_seconds: 3, work_interval_seconds: 7, exercise_id: 2, workout_id: 1)
ExerciseSet.create(reps: 1, order: 1, rest_interval_seconds: 6, work_interval_seconds: 7, exercise_id: 3, workout_id: 1)

