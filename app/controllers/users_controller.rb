class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def current_user_data
    # data = {}
    # data[:current_user] = current_user(include: {:shop => {:include => :products}}, except: [:password_digest, :session_token])
    # render json: current_user
    render :current_user_data
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email)
  end
end
