namespace :api do
  namespace :v1 do
    resource :user, only: %i[show]
  end
end
