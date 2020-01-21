class CharactersController < ApplicationController
    def create 
        # byebug
        character = Character.new(char_params)
        params["attacks"].each do |at|
            character.attacks.push(at)
        end
        # byebug
        if(character.save!)
            render json: character
        end
    end

private

    def char_params
        params.permit(:name, :focus, :health, :attacks, :team_id)
    end
end
