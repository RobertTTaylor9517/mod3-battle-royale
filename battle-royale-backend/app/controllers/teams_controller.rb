class TeamsController < ApplicationController
    def create
        team = Team.new(team_params)
        if(team.save!)
            render json: team
        end
    end

private

    def team_params
        params.permit(:name, :user_id)
    end
end
