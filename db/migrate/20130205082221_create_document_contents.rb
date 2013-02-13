class CreateDocumentContents < ActiveRecord::Migration
  def change
    create_table :document_contents do |t|
      t.references :document
      t.text :header
      t.text :main
      t.text :footer
      t.string :primary_color
      t.string :secondary_color
      t.references :assembly

      t.timestamps
    end
    add_index :document_contents, :document_id
    add_index :document_contents, :assembly_id
  end
end
