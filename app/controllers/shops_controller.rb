class ShopsController < ApplicationController
  before_action :require_signed_in!, only: [:new, :create]

  def new
    @shop = Shop.new
    render :new
  end

  def create
    @shop = Shop.new(shop_params)
    @shop.owner_id = current_user.id
    if @shop.save
      redirect_to shop_url(@shop)
    else
      flash.now[:errors] = @shop.errors.full_messages
      render :new
    end
  end

  def show
    @shop = Shop.find(params[:id])
    respond_to do |format|
      format.json { render json: @shop }
      format.html { render :show }
    end
  end

  def index
    @shops = Shop.all
    respond_to do |format|
      format.json { render json: @shops }
    end
  end

  private
  def shop_params
    params.require(:shop).permit(:name, :shop_image)
  end
end
