FoodForYouFoorMe::Application.routes.draw do
  devise_for :users

  root :to => "ad#new"

  resources :ad
end
