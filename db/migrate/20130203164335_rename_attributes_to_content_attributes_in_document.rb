class RenameAttributesToContentAttributesInDocument < ActiveRecord::Migration
  change_table :documents do |t|
    t.rename :attributes, :content_attributes
  end
end
