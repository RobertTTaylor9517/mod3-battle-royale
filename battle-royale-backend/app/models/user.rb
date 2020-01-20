class User < ApplicationRecord
    has_many :teams

    validates :username, uniqueness: true
end
