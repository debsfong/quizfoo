class AddStatus < ActiveRecord::Migration
  def change
    remove_column :users, :teacher
    add_column :users, :status, :string
  end
end
