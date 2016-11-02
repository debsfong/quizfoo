class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def teacher_quizzes
		@current_user.quizzes
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :last_name, :first_name, :status)
	end

end
