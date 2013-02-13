class CleanUpOfTables < ActiveRecord::Migration
  def change
    drop_table :document_contents
    drop_table :guides
    drop_table :templates
  end
end
