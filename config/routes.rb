Rails.application.routes.draw do
  root to: "sessions#new"

  resources :users, only: [:new, :create, :index]
  resource :session, only: [:new, :create, :destroy]
end
