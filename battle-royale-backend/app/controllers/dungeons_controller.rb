class DungeonsController < ApplicationController
    def index
        dungeons = Dungeon.all 
        render json: DungeonSerializer.new(dungeons).to_serialized_json
    end

    def show
        dungeon = Dungeon.find_by(id: params[:id])
        render json: DungeonSerializer.new(dungeon).to_serialized_json
    end
end
