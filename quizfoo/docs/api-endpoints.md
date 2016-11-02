# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
  - create account

### Session

- `POST /api/session`
  - log in
- `DELETE /api/session`
  - log out
- `GET /api/session`

### Classes

- `GET /api/class`
  - Classes index/search
- `POST /api/class`
  - New Class Form
- `PATCH /api/class/:classId`
- `DELETE /api/class/:classId`

### Quizzes

- `GET /api/class/:classId/quiz`
  - Quiz Index
- `POST /api/class/:classId/quiz`
  - New Quiz Form
- `GET /api/class/:classId/quiz/:quizId`
  - Quiz Show Page
- `POST /api/class/:classId/quiz/:quizId`
  - New Questions?
- `PATCH /api/class/:classId/quiz/:quizId`
  - Edit Questions?
- `DELETE /api/quiz/:quizId`
