class ProductsController < ApplicationController
  def index
    @products = Product.all.where.not(shop_id: current_user.shop.id)
    @order_item = current_order.order_items.new
  end
end
