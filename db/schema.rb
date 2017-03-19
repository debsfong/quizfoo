# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170318183148) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "choices", force: :cascade do |t|
    t.string   "value",       null: false
    t.integer  "question_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "choices", ["question_id"], name: "index_choices_on_question_id", using: :btree
  add_index "choices", ["value", "question_id"], name: "index_choices_on_value_and_question_id", unique: true, using: :btree

  create_table "courses", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "courses", ["teacher_id"], name: "index_courses_on_teacher_id", using: :btree

  create_table "enrollments", force: :cascade do |t|
    t.integer  "course_id",  null: false
    t.integer  "student_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "enrollments", ["course_id"], name: "index_enrollments_on_course_id", using: :btree
  add_index "enrollments", ["student_id"], name: "index_enrollments_on_student_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "text",       null: false
    t.integer  "order",      null: false
    t.integer  "quiz_id",    null: false
    t.string   "form_type",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "questions", ["order", "quiz_id"], name: "index_questions_on_order_and_quiz_id", unique: true, using: :btree
  add_index "questions", ["quiz_id"], name: "index_questions_on_quiz_id", using: :btree

  create_table "quizzes", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "quizzes", ["teacher_id"], name: "index_quizzes_on_teacher_id", using: :btree

  create_table "responses", force: :cascade do |t|
    t.string   "value",       null: false
    t.integer  "question_id", null: false
    t.integer  "student_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "responses", ["question_id"], name: "index_responses_on_question_id", using: :btree
  add_index "responses", ["student_id"], name: "index_responses_on_student_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "user_type",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
