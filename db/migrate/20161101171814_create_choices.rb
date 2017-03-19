class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.string :value, null: false
      t.integer :question_id, null: false

      t.timestamps null: false
    end
    add_index :choices, :question_id
    add_index :choices, [:value, :question_id], unique: true
  end
end
