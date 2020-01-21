# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Attack.destroy_all
Character.destroy_all
Team.destroy_all
Dungeon.destroy_all
Floor.destroy_all
Enemy.destroy_all


flame_pillar = Attack.find_or_create_by!(name: "Flame Pillar", element: "fire", damage: 25)
fire_flame = Attack.find_or_create_by(name: "Fire Flame", element: "fire", damage: 10)
flame_punch = Attack.find_or_create_by(name: "Fire Fist", element: "fire", damage: 15)
ice_pillar = Attack.find_or_create_by(name: "Ice Pillar", element: "ice", damage: 20)
frost =  Attack.find_or_create_by(name: "Frost", element: "ice", damage: 15)
freeze = Attack.find_or_create_by(name: "Freeze", element: "ice", damage: 30)
shake = Attack.find_or_create_by(name: "Shake", element: "earth", damage: 10)
rock = Attack.find_or_create_by(name: "Rock", element: "earth", damage: 20)
quake = Attack.find_or_create_by(name: "Quake", element: "earth", damage: 30)
water_wheel = Attack.find_or_create_by(name: "Water Wheel", element: "water", damage: 25)
wave = Attack.find_or_create_by(name: "Wave", element: "water", damage: 18)
flood = Attack.find_or_create_by(name: "Flood", element: "water", damage: 30)
rush = Attack.find_or_create_by(name: "Rush", element: "none", damage: 15)
strike = Attack.find_or_create_by(name: "Strike", element: "none", damage: 6)
heal = Attack.find_or_create_by(name: "Heal", element: "medic", damage: -25)

dungeon1 = Dungeon.find_or_create_by(name: "Dungeon 1")
dungeon2 = Dungeon.find_or_create_by(name: "Dungeon 2")

floorA1 = Floor.create!(dungeon_id: dungeon1.id)
floorA2 = Floor.create!(dungeon_id: dungeon1.id)
floorA3 = Floor.create!(dungeon_id: dungeon1.id)
floorA4 = Floor.create!(dungeon_id: dungeon1.id)
floorA5 = Floor.create!(dungeon_id: dungeon1.id)
floorA6 = Floor.create!(dungeon_id: dungeon1.id)
floorA7 = Floor.create!(dungeon_id: dungeon1.id)
floorA8 = Floor.create!(dungeon_id: dungeon1.id)
floorA9 = Floor.create!(dungeon_id: dungeon1.id)
floorA10 = Floor.create!(dungeon_id: dungeon1.id)

floorB1 = Floor.create!(dungeon_id: dungeon2.id)
floorB2 = Floor.create!(dungeon_id: dungeon2.id)
floorB3 = Floor.create!(dungeon_id: dungeon2.id)
floorB4 = Floor.create!(dungeon_id: dungeon2.id)
floorB5 = Floor.create!(dungeon_id: dungeon2.id)
floorB6 = Floor.create!(dungeon_id: dungeon2.id)
floorB7 = Floor.create!(dungeon_id: dungeon2.id)
floorB8 = Floor.create!(dungeon_id: dungeon2.id)
floorB9 = Floor.create!(dungeon_id: dungeon2.id)
floorB10 = Floor.create!(dungeon_id: dungeon2.id)

goblinAttacks = [rush, strike]
mermenAttacks = [wave, water_wheel]
golemAttacks = [quake, rush, quake]
fGolemAttacks = [flame_pillar, flame_pillar, quake, rush]

goblinA1 = Enemy.create!(name: "Goblin", health: 80, weakness: "fire", attacks: goblinAttacks, floor_id: floorA1.id)
goblinA2 = Enemy.create!(name: "Goblin", health: 80, weakness: "fire", attacks: goblinAttacks, floor_id: floorA1.id)

mermenA1 = Enemy.create!(name: "Mermen", health: 100, weakness: "ice", attacks: mermenAttacks, floor_id: floorA2.id)
mermenA2 = Enemy.create!(name: "Mermen", health: 100, weakness: "ice", attacks: mermenAttacks, floor_id: floorA2.id)
goblinB1 = Enemy.create!(name: "Goblin", health: 80, weakness: "fire", attacks: goblinAttacks, floor_id: floorA2.id)

golem = Enemy.create!(name: "Golem", health: 500, weakness: "none", attacks: golemAttacks, floor_id: floorA5.id)
flame_golem = Enemy.create!(name: "Fire Golem", health: 700, weakness: "water", attacks: fGolemAttacks, floor_id: floorB5.id)



# byebug 
