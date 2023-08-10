class Album < ApplicationRecord
    has_many :reviews
    has_many :users, through :reviews
    validates :artist, :tracks presence: true 
    validates :genre, presence: true, inclusion: ["Rock", "Heavy Metal", "Hip-hop/Rap", "Folk", "Country", "Pop", "Dance", "Alternative", "Other"]

    #instance method to make tracks a hash with key-value pairs?
end
