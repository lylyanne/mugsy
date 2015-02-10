class Api::CartsController < ApplicationController  
  IN_CART = 1
  PLACED = 2
  SHIPPED = 3
  CACELLED = 4

  def show
    @order_items = current_order.order_items
    @order = current_order
    render "show"
  end

  def update
    @order = current_order
    @order.update_attributes({order_status_id: PLACED})
    session[:order_id] = nil
    render :json => @order
  end
end
