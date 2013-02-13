json.documents do
  json.array!(@documents) do |document|
    json.partial! "document", document: document
  end
end