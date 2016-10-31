Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :classes, only: [:new, :create, :destroy, :show]
    resources :quizzes, only: [:new, :create, :destroy, :show]
  end
end
