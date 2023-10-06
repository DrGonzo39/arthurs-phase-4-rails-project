class Review < ApplicationRecord
    belongs_to :user
    belongs_to :album 
    validates :content, length: { maximum: 150 }

    validate :one_per_album

    private

    def one_per_album
        if user.reviews.any? { |review| review.album_id == album.id }
            errors.add(:base, "You can only review an album once")
        end 
    end
end
