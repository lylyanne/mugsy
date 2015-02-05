class ShopsController < ApplicationController
  def show
    @shop = Shop.find(params[:id])
    render :show
  end

  private
  def shop_params
    params.require(:shop).permit(:name, :shop_image)
  end
end
