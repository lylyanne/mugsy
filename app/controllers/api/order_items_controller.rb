class Api::OrderItemsController < ApplicationController
  def create
    @order = current_order
    @order_item = @order.order_items.new(order_item_params)
    @order_item.buyer_id = current_user.id
    @order.save
    session[:order_id] = @order.id
    render "show"
  end

  def update
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.update_attributes(order_item_params)
    @order_items = @order.order_items
    render "show"
  end

  def destroy
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    @order_items = @order.order_items
    render "show"
  end

  def show
    @order_item = OrderItem.find(params[:id])
    render "show"
  end

  def index
    if params[:role] == "seller"
      @products = current_user.shop.products.ids
      @all_order_items = OrderItem.all
      @order_items = []
      @all_order_items.each do |order_item|
        @order_items << order_item if @products.include?(order_item.product_id)
      end
      render "index"
    elsif params[:role] == "buyer"
      @order_items = current_user.ordered_items
      render "index"
    else
      @order = current_order
      if @order
        @order_items = @order.order_items
        render :json => @order_items
      else
        render :json => {}
      end
    end
  end

  private
  def order_item_params
    params.require(:order_item).permit(:quantity, :product_id)
  end
end
