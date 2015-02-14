json.array!(@shops) do |shop|
  json.partial!("shop", :shop => shop, :products => shop.products)
end
