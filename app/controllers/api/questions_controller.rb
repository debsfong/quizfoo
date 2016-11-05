class Api::QuestionsController < ApplicationController

  def index
    puts "PARAMS BELOW!"
    puts params
    @questions = Question.where(quiz_id: params[:quizId])
  end

  def show
    @question = Question.find(params[:id])
  end

  def destroy
    @question = Question.find(params[:id])
    if @question
      render "api/questions/show"
    else
      render(
        json: ["Cannot find question"],
        status: 404
      )
    end
  end

  private

  def question_params
    params.require(:question).permit(:text, :order, :quiz_id, :form_type)
  end
end
