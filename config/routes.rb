Rails.application.routes.draw do
  root 'application#index'
  get '/word/:name', to: 'application#word'
end
