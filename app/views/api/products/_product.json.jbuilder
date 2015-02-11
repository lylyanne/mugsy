json.(product, :id, :name, :product_image, :description,
              :price, :category, :created_at, :updated_at, :shop_id)

json.shop_name product.shop.name
