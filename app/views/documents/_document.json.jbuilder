json.(
  document,
  :id,
  :title,
  :slug,
  :public,
  :user,
  :footer,
  :header,
  :main,
  :primary_color,
  :secondary_color,
  :assembly_id
)

# retina ready screens
width = 224*2
height = 331*2
dim = "#{width}x#{height}"

json.image_url document.cover_image.thumb(dim).url if document.cover_image