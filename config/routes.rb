Rails.application.routes.draw do
  root to: "static_pages#root"
  get "current_user_data", to: "users#current_user_data"
  resources :users, only: [:new, :create, :index]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, :defaults => { :format => :json } do
    resources :shops, except: :destroy
    resources :products
    resources :order_items, except: [:new, :edit]
    resources :orders, only: [:show, :update, :index, :create]
  end
end
