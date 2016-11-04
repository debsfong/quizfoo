class EditQuestionType < ActiveRecord::Migration
  def change
    remove_column :questions, :type
    add_column :questions, :form_type, :string, null: false
  end
end
