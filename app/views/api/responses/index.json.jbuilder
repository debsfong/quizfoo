json.array! @responses do |response|
  json.id response.id
  json.value response.value
  json.question response.question
  json.student do
    json.first_name response.student.first_name
    json.last_name response.student.last_name
  end
end
