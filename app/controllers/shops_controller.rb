class ShopsController < ApplicationController
  def show
    @shop = Shop.find(params[:id])
    @products = Product.where(shop_id: params[:id])
    @order_item = current_order.order_items.new
    render :show
  end

  private
  def shop_params
    params.require(:shop).permit(:name, :shop_image)
  end
end
