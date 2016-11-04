class Api::QuizzesController < ApplicationController

  def create
    @quiz = Quiz.new(quiz_params)
    @quiz.teacher_id = current_user.id

		if @quiz.save
			render "api/users/show"
		else
			render json: @quiz.errors.full_messages, status: 422
		end
  end

  def index
    @quizzes = Quiz.where(teacher_id: current_user.id)
  end

  def show
    @quiz = Quiz.find(params[:id])
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    if @quiz
      render "api/quizzes/show"
    else
      render(
        json: ["Cannot find quiz"],
        status: 404
      )
    end
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title)
  end
end
