class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    quiz = Quiz.find(question_params[:quiz_id]);
    @question.order = quiz.questions.length + 1

    if @question.save
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def index
    @questions = Question.where(quiz_id: params[:quizId])
  end

  def show
    @question = Question.find(params[:id])
  end

  def destroy
    @question = Question.find(params[:id])
    if @question
      @question.destroy
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
    params.require(:question).permit(:text, :order, :quiz_id, :form_type, choices_attributes: [:question_id, :value])
  end
end
