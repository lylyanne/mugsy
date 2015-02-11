class Api::OrdersController < ApplicationController
  IN_CART = 1
  PLACED = 2
  SHIPPED = 3
  CANCELLED = 4

  def create
    # @order = Order.new(order_params)
    # session[:order_id] = @order.id
    # render "show"
    @order = current_order
    @order.order_status_id = PLACED
    @order.update_attributes(order_params)
    session[:order_id] = nil
    render "show"
  end

  def show
    @order_items = current_order.order_items
    @order = current_order
    render "show"
  end

  def update
    @order = Order.find(params[:id])
    @order.update_attributes(order_params)
    session[:order_id] = nil
    render :json => @order
  end

  def index
    if params[:role] == "seller"
      @products = current_user.products.ids
      @all_order_items = OrderItem.all.includes(:buyer).includes(:product)
      @orders = []
      @all_order_items.each do |order_item|
        @orders << order_item.order if @products.include?(order_item.product_id)
      end
      @orders.uniq!
      render "seller_index"
    else
      @orders = Order.all
      render "index"
    end
  end

  private
  def order_params
    params.require(:order).permit(:subtotal, :tax, :shipping, :total, :order_status_id)
  end
end
