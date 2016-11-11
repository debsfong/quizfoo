# == Schema Information
#
# Table name: choices
#
#  id          :integer          not null, primary key
#  value       :string           not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Choice < ActiveRecord::Base
  validates :value, presence: true

  belongs_to :question
end
