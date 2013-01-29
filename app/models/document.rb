class Document < ActiveRecord::Base
  belongs_to :user
  belongs_to :template
  attr_accessible :cover_image, :template_id, :content, :retained_cover_image, :remove_cover_image, :cover_image_name, :cover_image_uid, :public, :title
  serialize :content
  image_accessor :cover_image

  def structure
    base_path = "app/assets/templates/"
    full_path = "#{base_path}#{template.slug}.html"

    if File.exist?(full_path)
      return File.read(full_path)
    else
      return nil
    end
  end
end
