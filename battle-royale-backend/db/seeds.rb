# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

flame_pillar = Attack.find_or_create_by!(name: "Flame Pillar", element: "fire", damage: 25)
fire_flame = Attack.find_or_create_by(name: "Fire Flame", element: "fire", damage: 10)
frost =  Attack.find_or_create_by(name: "Frost", element: "ice", damage: 15)
freeze = Attack.find_or_create_by(name: "Freeze", element: "ice", damage: 30)
rock = Attack.find_or_create_by(name: "Rock", element: "earth", damage: 20)
quake = Attack.find_or_create_by(name: "Quake", element: "earth", damage: 30)
wave = Attack.find_or_create_by(name: "Wave", element: "water", damage: 18)
flood = Attack.find_or_create_by(name: "Flood", element: "water", damage: 30)
strike = Attack.find_or_create_by(name: "Strike", element: "none", damage: 6)
heal = Attack.find_or_create_by(name: "Heal", element: "medic", damage: -25)


# byebug 
