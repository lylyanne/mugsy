@orders ||= nil
unless @orders.nil?
  json.array!(@orders) do |order|
    json.(order, :id, :created_at, :updated_at)

    json.order_status Order::ORDER_STATUSES[order.order_status_id]
    json.ordered_at order.created_at.strftime("%F %T %p")
    json.buyer_name order.order_items.first.buyer.email

    json.order_items(order.order_items) do |order_item|
      json.partial!("api/order_items/order_item", :order_item => order_item)
    end
  end
end
