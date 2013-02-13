json.templates do
  json.array!(@templates) do |template|
    json.partial! "template", template: template
  end
end