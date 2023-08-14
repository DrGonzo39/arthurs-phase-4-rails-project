class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :artist, :genre, :tracks 
end
