class Album < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    validates :title, :artist, :tracks, presence: true 
    validates :genre, presence: true, inclusion: ["Rock", "Heavy Metal", "Hip-hop/Rap", "Folk", "Country", "Pop", "Dance", "Alternative", "Other"]

end
