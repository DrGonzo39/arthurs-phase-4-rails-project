class UserSerializer < ActiveModel::Serializer
  attributes :id, :username 
  has_many :albums
  has_many :reviews
end
