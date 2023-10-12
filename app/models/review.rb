class Review < ApplicationRecord
    belongs_to :user
    belongs_to :album 
    validates :content, length: { maximum: 150 }

    private

end
