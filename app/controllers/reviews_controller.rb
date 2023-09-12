class ReviewsController < ApplicationController 

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end

    def create
        
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created 
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:content, :album_id)
    end

end
