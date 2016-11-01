class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.string :value, null: false
      t.integer :question_id, null: false
      t.integer :student_id, null: false

      t.timestamps null: false
    end
  end
end
