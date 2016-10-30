```js
{
  currentUser: {
    id: 1,
    teacher: true
    email: "teacher@school.k12.ca.us"
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
  },
  classes: {
    1: {
      title: "Redux 101",
      author_id: 1,
    }
  }
  quizzes: {
    1: {
      title: "Sample Quiz",
      class_id: 1
    }
  },
  questions: {
    1: {
      question: "Who is that?",
      type: "select",
      quiz_id: 1
    }
    2: {
      question: "What is that?",
      type: "radio",
      quiz_id: 1
    }
  },
  choices: {
    1: {
      text: "That's Markov",
      question_id: 1
    }
  },
  responses: {
    1: {
      choice_id: 1,
      respondent_id: 2
    }
  },
}
```
