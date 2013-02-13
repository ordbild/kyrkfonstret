class RemoveDocumentFromAssembly < ActiveRecord::Migration
  def up
    remove_column :assemblies, :documents_id
  end

  def down
    add_column :assemblies, :documents_id, :integer
  end
end
