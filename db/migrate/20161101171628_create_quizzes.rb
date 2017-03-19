class CreateQuizzes < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.string :title, null: false
      t.integer :teacher_id, null: false

      t.timestamps null: false
    end
    add_index :quizzes, :teacher_id
  end
end
