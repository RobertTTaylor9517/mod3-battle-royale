Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/attacks", to: "attacks#index"
  post "/users", to: "users#create"
  get "/users", to: "users#index"
  post "/teams", to: "teams#create"
  post "/characters", to: "characters#create"
end
