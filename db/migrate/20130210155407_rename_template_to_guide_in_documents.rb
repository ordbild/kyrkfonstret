class RenameTemplateToGuideInDocuments < ActiveRecord::Migration
  change_table :documents do |t|
    t.rename :template_id, :guide_id
  end
end
