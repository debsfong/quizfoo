class Api::ResponsesController < ApplicationController
  def create
    @response = Response.new(response_params)
    @response.student_id = current_user.id

    if @response.save
      render 'api/responses/show'
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  # def index
  #   @responses = Response.where(question_id: params[:questionId])
  # end
  #
  # def show
  #   @response = Response.find(params[:id])
  # end

  def destroy
    @response = Response.find(params[:id])
    if @response
      @response.destroy
      render 'api/responses/show'
    else
      render(
        json: ["Cannot find question"],
        status: 404
      )
    end
  end

  private

  def response_params
    params.require(:response).permit(:value, :student_id, :question_id)
  end
end
