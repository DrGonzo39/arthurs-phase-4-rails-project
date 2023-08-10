class AlbumsController < ApplicationController

    def index 
        albums = Album.all 
        render json: albums
    end

    def create
        album = Album.create!(album_params)
        render json: album, status: :created 
    end

    private 

    def album_params
        params.permit(:artist, :genre, :tracks)
    end

end
