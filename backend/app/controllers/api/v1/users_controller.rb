class Api::V1::UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users 
    end 

    def create
        if User.find_by(:username => user_params[:username])
            user = User.find_by(:username => user_params[:username])
        else
            user = User.create(user_params)
        end
        redirect_to api_v1_user_path(user)
    end

    def show 
        user = User.find_by(:id => params[:id].to_i)
        render json: user.to_json(:include => {
            :animes => {:except => [:created_at,:updated_at, :user_id]}
        })
    end 

    private 

    def user_params
        params.require(:user).permit(:username)
    end 
end
