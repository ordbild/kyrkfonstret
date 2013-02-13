class AddContentFieldsToTemplate < ActiveRecord::Migration
  def change
    add_column :templates, :header, :text
    add_column :templates, :main, :text
    add_column :templates, :footer, :text
    add_column :templates, :primary_color, :string
    add_column :templates, :secondary_color, :string
  end
end
