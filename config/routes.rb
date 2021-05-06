Rails.application.routes.draw do

  scope '(:locale)', locale: /en|de|fr|it/ do
    root to: 'pages#home'
  end
end
