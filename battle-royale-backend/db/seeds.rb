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
heal = Attack.find_or_create_by(name: "Heal", element: "medic", damage: 25)

flameMaxim = Attack.find_or_create_by(name: "Maximum Flame", element: "boss", damage: 50)
stab = Attack.find_or_create_by(name: "Stab", element: "enem", damage: 30)
balast = Attack.find_or_create_by(name: "Balast", element: "enem", damage: 30)

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

goblinAttacks = [rush.id, strike.id]
mermenAttacks = [wave.id, water_wheel.id]
golemAttacks = [quake.id, rush.id, quake.id]
fGolemAttacks = [flame_pillar.id, flame_pillar.id, quake.id, rush.id]
gobMAttacks = [flame_punch.id, ice_pillar.id, fire_flame.id]
gobKAttacks = [rush.id, rush.id, rock.id]
darKnightAtt = [flame_pillar.id, flame_pillar.id, rush.id]
darMageAtt = [quake.id, rock.id, balast.id]
highKnightAtt = [stab.id, balast.id]
bahaAtt = [flameMaxim.id, flame_pillar.id, stab.id]

goblinA1 = Enemy.create!(name: "Goblin", health: 80, weakness: "fire", attacks: goblinAttacks, floor_id: floorA1.id)
goblinA2 = Enemy.create!(name: "Goblin", health: 80, weakness: "fire", attacks: goblinAttacks, floor_id: floorA1.id)

mermenA1 = Enemy.create!(name: "Mermen", health: 100, weakness: "ice", attacks: mermenAttacks, floor_id: floorA2.id)
mermenA2 = Enemy.create!(name: "Mermen", health: 100, weakness: "ice", attacks: mermenAttacks, floor_id: floorA2.id)
goblinA3 = Enemy.create!(name: "Goblin", health: 80, weakness: "fire", attacks: goblinAttacks, floor_id: floorA2.id)

highGoblinA1 = Enemy.create!(name: "Goblin Mage", health: 100, weakness: "earth", attacks: gobMAttacks, floor_id: floorA3.id)
highGoblinA2 = Enemy.create!(name: "Goblin Mage", health: 100, weakness: "earth", attacks: gobMAttacks, floor_id: floorA3.id)

goblinKnightA1 = Enemy.create!(name: "Goblin Knight", health: 90, weakness: "fire", attacks: gobKAttacks, floor_id: floorA4.id)
goblinKnightA2 = Enemy.create!(name: "Goblin Knight", health: 90, weakness: "fire", attacks: gobKAttacks, floor_id: floorA4.id)
highGoblinA3 = Enemy.create!(name: "Goblin Mage", health: 100, weakness: "earth", attacks: gobMAttacks, floor_id: floorA4.id)

golem = Enemy.create!(name: "Golem", health: 500, weakness: "none", attacks: golemAttacks, floor_id: floorA5.id)

darkKnightA1 = Enemy.create!(name: "Dark Knight", health: 200, weakness: "water", attacks: darKnightAtt, floor_id: floorA6.id)
darkKnightA2 = Enemy.create!(name: "Dark Knight", health: 200, weakness: "water", attacks: darKnightAtt, floor_id: floorA6.id)

darkKnightA3 = Enemy.create!(name: "Dark Knight", health: 200, weakness: "water", attacks: darKnightAtt, floor_id: floorA7.id)
darkMageA1 = Enemy.create!(name: "Dark Mage", health: 150, weakness: "water", attacks: darMageAtt, floor_id: floorA7.id)
darkMageA2 = Enemy.create!(name: "Dark Mage", health: 150, weakness: "water", attacks: darMageAtt, floor_id: floorA7.id)

highKnightA1 = Enemy.create!(name: "High Knight", health: 200, weakness: "earth", attacks: highKnightAtt, floor_id: floorA8.id)

highKnightA2 = Enemy.create!(name: "High Knight", health: 200, weakness: "earth", attacks: highKnightAtt, floor_id: floorA9.id)
highKnightA3 = Enemy.create!(name: "High Knight", health: 200, weakness: "earth", attacks: highKnightAtt, floor_id: floorA9.id)
darkKnightA4 = Enemy.create!(name: "Dark Knight", health: 200, weakness: "water", attacks: darKnightAtt, floor_id: floorA9.id)

bahamut = Enemy.create!(name: "Bahamut", health: 800, weakness: "none", attacks: bahaAtt, floor_id: floorA10.id)



flame_golem = Enemy.create!(name: "Fire Golem", health: 800, weakness: "water", attacks: fGolemAttacks, floor_id: floorB5.id)



# byebug 
