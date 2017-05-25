import React from 'react';
import { withRouter } from 'react-router';

const QuizCardItem = ({quiz, deleteQuiz, router}) => {

  const handleClick = url => e => router.push(url);

  return (
    <div className="grid-child">
      <h1>{quiz.title}</h1>
      <h2>{"By " + quiz.user.first_name + " " + quiz.user.last_name}</h2>
      <button onClick={handleClick(`/quiz/${quiz.id}`)}>Edit</button>
      <button onClick={() => this.props.deleteQuiz(quiz.id)}>Delete</button>
    </div>
  );
};

export default withRouter(QuizCardItem);
