json.document do 
  json.(@document, :id, :title, :public, :user, :structure, :content)

  json.cover_image_url @document.cover_image.url if @document.cover_image

  json.template(@document.template, :id, :slug)
end