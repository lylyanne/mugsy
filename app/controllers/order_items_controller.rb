class OrderItemsController < ApplicationController
  def create
    @order = current_order
    @order_item = @order.order_items.new(order_item_params)
    @order_item.buyer_id = current_user.id
    @order.save
    session[:order_id] = @order.id
    redirect_to cart_url
  end

  def update
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.update_attributes(order_item_params)
    @order_items = @order.order_items
    redirect_to cart_url
  end

  def destroy
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    @order_items = @order.order_items
    redirect_to cart_url
  end

  private
  def order_item_params
    params.require(:order_item).permit(:quantity, :product_id)
  end
end
