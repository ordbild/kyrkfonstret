class AddDocumentContentToDocument < ActiveRecord::Migration
  def change
    add_column :documents, :document_content_id, :integer
    add_index :documents, :document_content_id
  end
end
