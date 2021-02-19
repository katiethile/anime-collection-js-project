class Api::V1::AnimesController < ApplicationController
    def index 
        animes = Anime.all 
        render json: animes 
    end 

    def create 
        ainme = anime.create(anime_params)
        render json: anime 
    end 

    private 

    def anime_params
        params.require(:post).permit(:title, :review, :user_id, :rating)
    end 
end
