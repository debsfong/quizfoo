import React from 'react';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const QuestionCardItem = ({question, router}) => {
  const handleClick = url => e => router.push(url);
  const handleDelete = () => {};

  return (
    <Card>
      <CardHeader
        title={question.order + ". " + question.text}
      />
    </Card>
  );
};

export default withRouter(QuestionCardItem);
