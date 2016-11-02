class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :text, null: false
      t.string :type, null: false
      t.integer :order, null: false
      t.integer :quiz_id, null: false

      t.timestamps null: false
    end
  end
end
