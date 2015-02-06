class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Expose these methods to the views
  helper_method :current_user, :current_order, :signed_in?

  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def current_order
    if !session[:order_id].nil?
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def sign_out
    current_user.try(:reset_token!)
    session[:session_token] = nil
    clear_cart
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def clear_cart
    current_order.order_items.each do |order_item|
      order_item.destroy
    end
    current_order.destroy
    session[:order_id] = nil
  end
end
