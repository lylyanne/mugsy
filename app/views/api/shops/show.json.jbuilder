json.(@shop, :id, :name, :shop_image, :created_at, :updated_at)

@products ||= nil
unless @products.nil?
  json.products(@products) do |product|
    json.partial!("api/products/product", :product => product)
  end
end
