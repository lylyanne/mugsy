Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create, :index]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, :defaults => { :format => :json } do
    resources :shops, except: [:destroy]
    resources :products, only: [:new, :create, :index, :show]
  end

  resources :shops, only: [:show]
end
