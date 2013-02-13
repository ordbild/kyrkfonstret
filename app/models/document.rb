class Document < ActiveRecord::Base
  belongs_to :user
  has_many :assemblies

  attr_accessible :image_url, :cover_image, :cover_image_url, :retained_cover_image, :remove_cover_image, :cover_image_name, :cover_image_uid
  attr_accessible :public, :title, :slug, :footer, :header, :main, :primary_color, :secondary_color, :assembly_id

  image_accessor :cover_image

  attr_accessor :image_url
end
