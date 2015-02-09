class Api::ProductsController < ApplicationController
  before_action :require_signed_in!, only: [:new, :create, :edit, :update]

  def new
    @product = Product.new
    render json: @product
  end

  def create
    @product = Product.new(product_params)
    @product.shop_id = current_user.shop.id
    if @product.save
      render :json => @product
    else
      render :json => @product.errors, :status => :unprocessable_entity
    end
  end

  def edit
    @product = Product.find(params[:id])
    render json: @product
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :json => @product
    else
      render :json => @product.errors, :status => :unprocessable_entity
    end
  end

  def show
    @product = Product.find(params[:id])
    render "show"
  end

  def index
    @products = Product.all
    render "index"
  end

  private
  def product_params
    params.require(:product).permit(:name, :product_image,
    :description, :price, :category)
  end
end
