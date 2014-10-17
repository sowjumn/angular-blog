require 'sinatra'

get '/' do
  send_file 'index.html'
end

get '/app.js' do
  send_file 'app.js'
end

get '/angular.js' do
  send_file 'angular.js'
end

get '/name-list.html' do
  send_file 'name-list.html'
end

get '/visitors-list.html' do
  send_file 'visitors-list.html'
end