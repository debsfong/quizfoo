import React from 'react';
import { withRouter } from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
// import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';

const QuizCardItem = ({quiz, deleteQuiz, router}) => {
  const handleClick = url => e => router.push(url);

  return (
    <div>Hello from quiz card items!
      <h1>{quiz.title}</h1>
      <h2>{"By " + quiz.user.first_name + " " + quiz.user.last_name}</h2>
    </div>
  );
  // <RaisedButton label="Edit" primary={true} onClick={handleClick(`/quiz/${quiz.id}`)}/>
  // <RaisedButton label="Delete" onClick={() => deleteQuiz(quiz.id)}/>
};

export default withRouter(QuizCardItem);
