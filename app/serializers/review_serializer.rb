class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :album_id
  belongs_to :album
  belongs_to :user 
end
