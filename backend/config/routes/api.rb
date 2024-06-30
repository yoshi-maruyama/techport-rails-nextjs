namespace :api do
  namespace :v1 do
    resource :user, only: %i[show]
    resources :careers, only: %i[index]
    resources :blogs, only: %i[index]
  end
end
