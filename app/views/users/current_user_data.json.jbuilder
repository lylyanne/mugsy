json.current_user do
  json.extract! current_user, :id, :email
end

if current_user.shop
  json.shop do
    json.extract! current_user.shop, :id, :name, :shop_image, :owner_id
    json.products current_user.shop.products
  end
end


if current_order
  json.current_order do
    json.extract! current_order, :id, :order_status_id, :total, :tax, :subtotal, :shipping, :order_items 
  end
end
