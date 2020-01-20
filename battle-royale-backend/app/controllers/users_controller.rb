class UsersController < ApplicationController
    def index
        users = User.all 

        render json: users 
    end

    def create
        user = User.new(user_params)

        if(user.save!)
            render json: user
        end
    end

    def access
    end


private

    def user_params
        params.permit(:username)
    end
end
