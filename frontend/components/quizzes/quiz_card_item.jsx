import React from 'react';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';

const QuizCardItem = ({quiz, router}) => {
  const handleClick = url => e => router.push(url);
  const handleDelete = () => {};

  return (
    <Card>
      <CardTitle
        title={quiz.title}
        subtitle={`by`}
      />
      <CardActions>
        <RaisedButton label="Edit" onClick={handleClick(`/quiz/${quiz.id}/edit`)}/>
        <RaisedButton label="Delete" onClick={handleDelete()}/>
      </CardActions>
    </Card>
  );
};

export default withRouter(QuizCardItem);
