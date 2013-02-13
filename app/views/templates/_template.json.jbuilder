
json.(template, :id, :slug, :title, :public, :footer, :header, :main, :primary_color, :secondary_color)

json.cover_image_url template.cover_image.url if template.cover_image