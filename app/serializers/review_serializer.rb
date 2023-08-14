class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :album_id
end
