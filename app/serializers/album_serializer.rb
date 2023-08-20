class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre, :tracks 
  has_many :reviews 
end
