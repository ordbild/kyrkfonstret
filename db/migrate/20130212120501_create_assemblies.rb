class CreateAssemblies < ActiveRecord::Migration
  def change
    create_table :assemblies do |t|
      t.string :title
      t.references :documents

      t.timestamps
    end
    add_index :assemblies, :documents_id
  end
end
