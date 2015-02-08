class Api::OrderItemsController < ApplicationController
  def create
    @order = current_order
    @order_item = @order.order_items.new(order_item_params)
    @order_item.buyer_id = current_user.id
    @order.save
    session[:order_id] = @order.id
    render :json => @order_item
  end

  def update
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.update_attributes(order_item_params)
    @order_items = @order.order_items
  end

  def destroy
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    @order_items = @order.order_items
  end

  def index
    @order = current_order
    if @order
      @order_items = @order.order_items
      render :json => @order_items
    else
      render :json => {}
    end
  end

  private
  def order_item_params
    params.require(:order_item).permit(:quantity, :product_id)
  end
end
