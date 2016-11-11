# == Schema Information
#
# Table name: quizzes
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  teacher_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Quiz < ActiveRecord::Base
  validates :title, :teacher_id, presence: true

  belongs_to :user, foreign_key: :teacher_id
  has_many :questions, dependent: :destroy
end
