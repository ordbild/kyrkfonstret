class RenameContentToAttributesInDocument < ActiveRecord::Migration
  change_table :documents do |t|
    t.rename :content, :attributes
  end
end
