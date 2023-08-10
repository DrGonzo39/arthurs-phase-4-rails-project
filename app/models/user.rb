class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :albums, through :reviews
    validates :username, :password, :password_confirmation, presence: true 
end
