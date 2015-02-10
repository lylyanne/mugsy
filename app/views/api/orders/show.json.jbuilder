json.(@order, :id, :subtotal, :tax, :shipping, :total, :order_status_id,
              :created_at, :updated_at)

@order_items ||= nil
unless @order_items.nil?
  json.order_items(@order_items) do |order_item|
    json.partial!("api/order_items/order_item", :order_item => order_item)
  end
end
