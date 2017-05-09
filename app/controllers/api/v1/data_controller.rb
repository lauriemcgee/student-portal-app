class Api::V1::DataController < ApplicationController
  def index
    render 'index.json.jbuilder'
  end
end
