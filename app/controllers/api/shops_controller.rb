class Api::ShopsController < ApplicationController
  before_action :require_signed_in!, only: [:new, :create, :edit, :update]

  def new
    @shop = Shop.new
    respond_to do |format|
      format.json { render json: @shop }
    end
  end

  def create
    @shop = Shop.new(shop_params)
    @shop.owner_id = current_user.id
    if @shop.save
      render :json => @shop
    else
      flash.now[:errors] = @shop.errors.full_messages
      render :new
    end
  end

  def edit
    @shop = Shop.find(params[:id])
    respond_to do |format|
      format.json { render json: @shop }
    end
  end

  def update
    @shop = Shop.find(params[:id])
    if @shop.update(shop_params)
      render :json => @shop
    else
      flash.now[:errors] = @shop.errors.full_messages
      render :edit
    end
  end

  def show
    @shop = Shop.find(params[:id])
    render json: @shop, include: :products
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
