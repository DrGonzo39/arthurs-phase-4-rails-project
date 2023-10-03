class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre, :tracks, :cover_image 
  has_many :reviews 
  has_many :users 
end
