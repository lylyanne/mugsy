json.(order_item, :id, :product_id, :order_id, :unit_price, :quantity,
:total_price, :buyer_id, :created_at, :updated_at)

json.order order_item.order
