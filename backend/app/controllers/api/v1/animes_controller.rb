class Api::V1::AnimesController < ApplicationController
    def index 
        @animes = Anime.all 
        render json: @animes 
    end 
end
