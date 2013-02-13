class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :title, :cover_image_uid, :cover_image_name, :public
  has_one :user
  has_one :template
end
