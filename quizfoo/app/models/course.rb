# == Schema Information
#
# Table name: courses
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  teacher_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Course < ActiveRecord::Base
end
