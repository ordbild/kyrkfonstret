class Assembly < ActiveRecord::Base
  belongs_to :documents
  attr_accessible :title
end
