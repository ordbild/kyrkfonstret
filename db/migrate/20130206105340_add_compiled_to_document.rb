class AddCompiledToDocument < ActiveRecord::Migration
  def change
    add_column :documents, :compiled, :text
  end
end
