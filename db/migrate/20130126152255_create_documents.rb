class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :title
      t.references :user
      t.references :template
      t.text :content
      t.string :cover_image_uid
      t.string :cover_image_name
      t.boolean :public

      t.timestamps
    end
    add_index :documents, :user_id
    add_index :documents, :template_id
  end
end
