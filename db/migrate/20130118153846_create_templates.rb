class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :templates do |t|
      t.string :title

      t.timestamps
    end
  end
end
