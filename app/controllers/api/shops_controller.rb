class Api::ShopsController < ApplicationController
  before_action :require_signed_in!, only: [:new, :create, :edit, :update]

  def new
    @shop = Shop.new
    render json: @shop
  end

  def create
    @shop = Shop.new(shop_params)
    @shop.owner_id = current_user.id
    if @shop.save
      render :json => @shop
    else
      render :json => @shop.errors, :status => :unprocessable_entity
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
      render :json => @shop.errors, :status => :unprocessable_entity
    end
  end

  def show
    @shop = Shop.find(params[:id])
    @products = @shop.products
    render "show"
  end

  def index
    @shops = Shop.all.includes(:products).search(params[:query])
    render "index"
  end

  private
  def shop_params
    params.require(:shop).permit(:name, :shop_image)
  end
end
