class Api::OrdersController < ApplicationController
  def buyer_orders
    @order_items = current_user.ordered_items
    render json: @order_items, include: [:product, :order]
  end
end
