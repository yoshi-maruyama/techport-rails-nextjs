# frozen_string_literal: true

Rails.application.routes.draw do
  draw(:api)

  resource :user, only: %i[show update create]
  resources :careers
  resources :blogs
end
