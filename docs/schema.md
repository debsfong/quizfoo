# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null
lname           | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
teacher         | boolean   | not null

## course (bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
teacher_id  | integer   | not null, foreign key (references users), indexed

## quizzes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
user_id     | integer   | not null, foreign key (references users(bonus, course_id references course)), indexed

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question    | string    | not null
type        | string    | not null
order       | integer   | not null
quiz_id     | integer   | not null, foreign key (references quizzes), indexed

## choices
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
value       | string    | not null
question_id | integer   | not null, foreign key (references questions), indexed

## responses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
value       | string    | not null
question_id | integer   | not null, foreign key (references questions), indexed
student_id  | integer   | not null, foreign key (references users), indexed
