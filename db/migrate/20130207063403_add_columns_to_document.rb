class AddColumnsToDocument < ActiveRecord::Migration
  def change
    add_column :documents, :header, :text
    add_column :documents, :main, :text
    add_column :documents, :footer, :text
    add_column :documents, :primary_color, :string
    add_column :documents, :secondary_color, :string
    add_column :documents, :assembly_id, :integer
    add_index :documents, :assembly_id
  end
end
