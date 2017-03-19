class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :text, null: false
      t.integer :order, null: false
      t.integer :quiz_id, null: false
      t.string :form_type, null: false

      t.timestamps null: false
    end
    add_index :questions, :quiz_id
    add_index :questions, [:order, :quiz_id], unique: true
  end
end
