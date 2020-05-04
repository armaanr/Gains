class CreateExerciseSets < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_sets do |t|
      t.integer :reps
      t.integer :order
      t.integer :rest_interval_seconds, null: false
      t.integer :work_interval_seconds, null: false
      t.belongs_to :exercise, null: false
      t.belongs_to :workout
      t.timestamps
    end
  end
end
