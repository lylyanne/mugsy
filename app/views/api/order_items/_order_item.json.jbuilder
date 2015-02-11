json.(order_item, :id, :product_id, :order_id, :unit_price, :quantity,
:total_price, :buyer_id, :created_at, :updated_at)

json.order do
  json.extract!(order_item.order, :id)

  json.order_status Order::ORDER_STATUSES[order_item.order.order_status_id]
end
