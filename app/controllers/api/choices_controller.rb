class Api::ChoicesController < ApplicationController
  def create
    @choice = Choice.new(choice_params)
    @choice.question_id = Question.last.id
    
    if @choice.save
      render 'api/choices/show'
    else
      render json: @choice.errors.full_messages, status: 422
    end
  end

  def destroy
    @choice = Choice.find(params[:id])
    if @choice
      @choice.destroy
      render 'api/choices/show'
    else
      render(
        json: ["Cannot find question"],
        status: 404
      )
    end
  end

  private

  def choice_params
    params.require(:choice).permit(:value, :question_id)
  end
end
