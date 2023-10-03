class AlbumsController < ApplicationController
    # skip_before_action? create?

    def index 
        albums = Album.all 
        render json: albums
    end

    def show
        album = Album.find_by(id: params[:id])
        render json: album
    end

    def create
        album = Album.create!(album_params)
        render json: album, status: :created 
    end

    private 

    def album_params
        params.permit(:title, :artist, :genre, :tracks, :cover_image)
    end

end
