json.array! @questions do |question|
  json.text question.text
  json.id question.id
  json.order question.order
  json.form_type question.form_type
  json.choices question.choices do |choice|
    json.value choice.value
  end
  json.responses question.responses do |response|
    json.first_name response.student.first_name
    json.last_name response.student.last_name
    json.value response.value
  end
end
