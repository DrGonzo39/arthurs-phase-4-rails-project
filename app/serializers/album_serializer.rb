class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :artist, :genre, :tracks 
  has_many :reviews 
end
