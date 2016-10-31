# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
  - create account
- `PATCH /api/users`

### Session

- `POST /api/session`
  - log in
- `DELETE /api/session`
  - log out
- `GET /api/session`

### Classes

- `GET /api/classes`
  - Classes index/search
- `POST /api/classes`
  - Create new Class
- `GET /api/classes/:id`
- `POST /api/classes/:id`
- `PATCH /api/classes/:id`
- `DELETE /api/classes/:id`

### Quizzes

- `GET /api/classes/:classId/quizzes`
- `POST /api/classes/:classId/quizzes`
- `GET /api/classes/:classId/quizzes/:id`
- `DELETE /api/classes/:classId/quizzes/:id`
- `GET /api/classes/:classId/quizzes/:id/notes`
  - index of all notes for a notebook
  - accepts pagination params (if I get there)
