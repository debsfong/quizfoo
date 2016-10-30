# Quizfoo

[Heroku](https://quizfoo.herokuapp.com/)
[Trello](https://trello.com/b/9szx69wF/wufoo-clone)

## Minimum Viable Product

Formalize is a web application inspired by Wufoo. The application will be build using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Create Quizzes
- [ ] Create Various Question Types
- [ ] Share Quiz with Students
- [ ] View Results

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Quizzes (2 days)

**Objective:** Teachers can create, edit and destroy Quizzes through
the API.

### Phase 3: Questions (1 day)

**Objective:** Questions belong to Quizzes and can be created, edited and destroyed through the API.

### Phase 4: Sharing (2 days)

**Objective:** Quizzes can be shared with Students in the class and Students can answer Quizzes.

### Phase 5: Results (2 days)

**Objective:** Teachers can view the results of each question of their Quizzes.

### Bonus Features (TBD)
- [ ] Style Quizzes
- [ ] Graph Results
- [ ] Score Quizzes
- [ ] Allow Parents to view Students' Past Quizzes
- [ ] Email quizzes to Students in the class
