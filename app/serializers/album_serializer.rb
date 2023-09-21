class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre, :tracks 
  has_many :reviews 
  has_many :users 
end
