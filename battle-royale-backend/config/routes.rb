Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/attacks", to: "attacks#index"
  post "/users", to: "users#create"
  get "/users", to: "users#index"
  get "/users/:id", to: "users#show"
  post "/teams", to: "teams#create"
  post "/characters", to: "characters#create"
  get "/dungeons", to: "dungeons#index"
  get "/dungeons/:id", to: "dungeons#show"
  delete "/users/:id", to: "users#delete"
  delete "teams/:id", to: "teams#delete"
end
