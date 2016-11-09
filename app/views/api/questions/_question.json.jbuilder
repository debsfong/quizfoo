json.extract! question, :id, :text, :form_type, :order, :quiz_id, :quiz, :choices
json.array! question.responses, :student
