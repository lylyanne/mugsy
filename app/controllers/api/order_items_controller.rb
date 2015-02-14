class Api::OrderItemsController < ApplicationController
  before_action :require_signed_in!

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
    if params[:role] == "buyer"
      @order_items = OrderItem.all
      .where(buyer_id: current_user.id)
      .includes(:buyer)
      .includes(:product)
      .order('created_at DESC')
      render "index"
    else
      @order = current_order
      if @order
        @order_items = @order.order_items
        render "index"
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
