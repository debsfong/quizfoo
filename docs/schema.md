# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
teacher         | boolean   | not null

## classes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null

## quizzes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
class_id    | integer   | not null, foreign key (references notebooks), indexed

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question    | string    | not null
type        | string    | not null
quiz_id     | integer   | not null, foreign key (references users), indexed

## choices
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
text        | string    | not null
type        | string    | not null
quiz_id     | integer   | not null, foreign key (references users), indexed

## responses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question    | string    | not null
type        | string    | not null
quiz_id     | integer   | not null, foreign key (references users), indexed
