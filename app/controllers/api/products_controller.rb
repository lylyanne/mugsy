class Api::ProductsController < ApplicationController
  before_action :require_signed_in!, only: [:new, :create, :edit, :update]

  def new
    @product = Product.new
    respond_to do |format|
      format.json { render json: @product }
    end
  end

  def create
    @product = Product.new(product_params)
    @product.shop_id = current_user.shop.id
    if @product.save
      render :json => @product
    else
      flash.now[:errors] = @product.errors.full_messages
      render :new
    end
  end

  def edit
    @product = Product.find(params[:id])
    respond_to do |format|
      format.json { render json: @product }
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :json => @product
    else
      flash.now[:errors] = @product.errors.full_messages
      render :edit
    end
  end

  def show
    @product = Product.find(params[:id])
    respond_to do |format|
      format.json { render json: @product }
    end
  end

  def index
    @products = Product.all.where(shop_id: current_user.shop.id)
    render "index"
  end

  private
  def product_params
    params.require(:product).permit(:name, :product_image,
    :description, :price, :category)
  end
end
