class CreateGuides < ActiveRecord::Migration
  def change
    create_table :guides do |t|
      t.string :title
      t.string :slug
      t.text :header
      t.text :main
      t.text :footer
      t.string :primary_color
      t.string :secondary_color
      t.boolean :public
      t.string :cover_image_uid
      t.string :cover_image_name

      t.timestamps
    end
  end
end
