# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  text       :string           not null
#  type       :string           not null
#  order      :integer          not null
#  quiz_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base
  validates :text, :quiz_id, presence: true

  belongs_to :quiz
  has_many :choices
  has_many :responses
end
