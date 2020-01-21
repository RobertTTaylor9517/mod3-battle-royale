class DungeonSerializer
    def initialize(dungeon_object)
        @dungeon = dungeon_object
    end

    def to_serialized_json
        options = {
            include: {
                floors: {
                    include: {
                        enemies: {
                            except: [:created_at, :updated_at]
                        }
                    },
                    except: [:created_at, :updated_at]
                }
            },
            except: [:created_at, :updated_at]
        }

        @dungeon.to_json(options)
    end
end