class TeamsController < ApplicationController
    def create
        team = Team.new(team_params)
        if(team.save!)
            render json: team
        end
    end

    def delete
        team = Team.find_by(id: params[:id])
        team.destroy
        render json: team 
    end

private

    def team_params
        params.permit(:name, :user_id)
    end
end
