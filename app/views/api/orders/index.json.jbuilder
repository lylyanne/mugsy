@orders ||= nil
unless @orders.nil?
  json.array!(@orders) do |order|
    json.(order, :id, :subtotal, :tax, :shipping, :total, :order_status_id,
    :created_at, :updated_at)
  end
end
