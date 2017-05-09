Rails.application.routes.draw do
  get "/yourresume" => "profiles#profile"
  namespace :api do
    namespace :v1 do
      get '/data' => 'data#index'
    end
  end


end
