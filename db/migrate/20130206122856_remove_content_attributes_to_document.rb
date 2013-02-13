class RemoveContentAttributesToDocument < ActiveRecord::Migration
  def change
    remove_column :documents, :content_attributes
  end
end
