Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create, :index]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, :defaults => { :format => :json } do
    resources :shops, except: [:destroy]
    resources :products
  end

  resources :shops, only: [:show]
  resources :products, only: [:index]
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
end
