class UpdateStatus < ActiveRecord::Migration
  def change
    remove_column :users, :status
    add_column :users, :status, :string, null: false
  end
end
