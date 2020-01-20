class CharactersController < ApplicationController
    def create 
        character = Character.new(char_params)
        if(character.save!)
            render json: character
        end
    end

private

    def char_params
        params.permit(:name, :focus, :health, :team_id)
    end
end
