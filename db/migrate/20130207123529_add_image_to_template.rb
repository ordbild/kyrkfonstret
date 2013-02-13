class AddImageToTemplate < ActiveRecord::Migration
  def change
    add_column :templates, :cover_image_uid, :string
    add_column :templates, :cover_image_name, :string
  end
end
