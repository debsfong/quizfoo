# == Schema Information
#
# Table name: responses
#
#  id          :integer          not null, primary key
#  value       :string           not null
#  question_id :integer          not null
#  student_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Response < ActiveRecord::Base
  validates :value, :question_id, :student_id, presence: true

  belongs_to :question
  belongs_to :student
    class_name: "User"
end
