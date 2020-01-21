class DungeonsController < ApplicationController
    def index
        dungeons = Dungeon.all 
        render json: DungeonSerializer.new(dungeons).to_serialized_json
    end
end
