import React from 'react';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';

const QuizCardItem = ({quiz, deleteQuiz, router}) => {
  const handleClick = url => e => router.push(url);

  return (
    <Card>
      <CardTitle
        title={quiz.title}
        subtitle={"By " + quiz.user.first_name + " " + quiz.user.last_name}
      />
      <CardActions>
        <RaisedButton label="Edit" primary={true} onClick={handleClick(`/quiz/${quiz.id}`)}/>
        <RaisedButton label="Delete" onClick={() => deleteQuiz(quiz.id)}/>
      </CardActions>
    </Card>
  );
};

export default withRouter(QuizCardItem);
