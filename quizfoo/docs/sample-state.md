```js
{
  user: {
    id: 1,
    fname: "Debra"
    lname: "Fong"
    email: "teacher@school.k12.ca.us"
    teacher: true
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
  },
  classes: {
    1: {
      title: "Redux 101",
      teacher_id: 1,
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
      value: "That's Markov",
      question_id: 1
    },
    2: {
      value: "That's Joe",
      question_id: 1
    }
  },
  responses: {
    1: {
      question_id: 1,
      student_id: 2,
      value: "That's Markov"
    }
  },
}
```
