class RemoveUnusedFieldsToDocuments < ActiveRecord::Migration
  def change
    remove_column :documents, :guide_id
    remove_column :documents, :compiled
    remove_column :documents, :document_content_id
  end
end
