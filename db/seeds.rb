# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

User.create!(
  first_name: "Debra",
  last_name: "Fong",
  email: "debra@email.com",
  status: "teacher",
  password: "password")
User.create!(
  first_name: "Guest",
  last_name: "Teacher",
  email: "teacher@school.k12.ca.us",
  status: "teacher",
  password: "password")
User.create!(
  first_name: "Guest",
  last_name: "Student",
  email: "student@email.com",
  status: "student",
  password: "password")
User.create!(
  first_name: "Guest 1",
  last_name: "Student",
  email: "student1@email.com",
  status: "student",
  password: "password")
User.create!(
  first_name: "Guest 2",
  last_name: "Student",
  email: "student2@email.com",
  status: "student",
  password: "password")
User.create!(
  first_name: "Guest 3",
  last_name: "Student",
  email: "student3@email.com",
  status: "student",
  password: "password")

Quiz.create!(title: "Questions Quiz", teacher_id: 1)
Quiz.create!(title: "Addition", teacher_id: 1)
Quiz.create!(title: "Subtraction", teacher_id: 2)
Quiz.create!(title: "Multiplication", teacher_id: 2)
Quiz.create!(title: "Division", teacher_id: 2)

Question.create!(text: "Who?", form_type: "multipleChoice", order: 1, quiz_id: 1)
Question.create!(text: "What?", form_type: "multipleChoice", order: 2, quiz_id: 1)
Question.create!(text: "Where?", form_type: "multipleChoice", order: 3, quiz_id: 1)
Question.create!(text: "When?", form_type: "shortAnswer", order: 4, quiz_id: 1)
Question.create!(text: "How?", form_type: "shortAnswer", order: 5, quiz_id: 1)
Question.create!(text: "Why?", form_type: "paragraph", order: 6, quiz_id: 1)
Question.create!(text: "1+1", form_type: "multipleChoice", order: 1, quiz_id: 2)
Question.create!(text: "1+2", form_type: "multipleChoice", order: 2, quiz_id: 2)
Question.create!(text: "1-1", form_type: "multipleChoice", order: 1, quiz_id: 3)
Question.create!(text: "1-2", form_type: "multipleChoice", order: 2, quiz_id: 3)

Choice.create!(value: "Me", question_id: 1)
Choice.create!(value: "You", question_id: 1)
Choice.create!(value: "Us", question_id: 1)
Choice.create!(value: "This", question_id: 2)
Choice.create!(value: "That", question_id: 2)
Choice.create!(value: "Huh?", question_id: 2)
Choice.create!(value: "Here", question_id: 3)
Choice.create!(value: "There", question_id: 3)
Choice.create!(value: "Nowhere", question_id: 3)
Choice.create!(value: "3", question_id: 4)
Choice.create!(value: "2", question_id: 4)
Choice.create!(value: "1", question_id: 4)

Response.create!(value: "Me", question_id: 1, student_id: 3)
Response.create!(value: "Me", question_id: 1, student_id: 4)
Response.create!(value: "You", question_id: 1, student_id: 5)
Response.create!(value: "Us", question_id: 1, student_id: 6)
Response.create!(value: "This", question_id: 2, student_id: 3)
Response.create!(value: "That", question_id: 2, student_id: 5)
Response.create!(value: "That", question_id: 2, student_id: 6)
Response.create!(value: "Huh?", question_id: 2, student_id: 4)
Response.create!(value: "Here", question_id: 3, student_id: 3)
Response.create!(value: "Nowhere", question_id: 3, student_id: 4)
Response.create!(value: "Nowhere", question_id: 3, student_id: 5)
Response.create!(value: "Nowhere", question_id: 3, student_id: 6)
Response.create!(value: "3", question_id: 7, student_id: 6)
Response.create!(value: "2", question_id: 7, student_id: 4)
Response.create!(value: "1", question_id: 7, student_id: 5)
Response.create!(value: "1", question_id: 7, student_id: 3)
