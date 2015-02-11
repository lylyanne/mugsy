class Api::OrdersController < ApplicationController
  IN_CART = 1
  PLACED = 2
  SHIPPED = 3
  CACELLED = 4

  def create
    # @order = Order.new(order_params)
    # session[:order_id] = @order.id
    # render "show"
    @order = current_order
    @order.order_status_id = PLACED
    @order.update_attributes(order_params)
    session[:order_id] = nil
    render :json => @order
  end

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

  def index
    @orders = Order.all
    render "index"
  end

  private
  def order_params
    params.require(:order).permit(:subtotal, :tax, :shipping, :total, :order_status_id)
  end
end
