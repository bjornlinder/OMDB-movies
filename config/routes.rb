Rails.application.routes.draw do
  root 'welcome#index'
  get "/search" => "movies#search"
  
end
