import React from 'react';
import QuestionContents from './question_contents';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class QuestionCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      question: this.props.question
    };
  }

  render() {

    return (
      <Card>
        <CardHeader title={this.props.question.order + ". " + this.props.question.text} />
        <QuestionContents question={this.props.question}/>
        <CardActions>
          <RaisedButton label="Edit" primary={true} onClick={this.props.handleOpen}/>
          <RaisedButton label="Delete" onClick={() => this.props.deleteQuestion(this.props.question.id)}/>
        </CardActions>
      </Card>
    );
  }
}

export default QuestionCardItem;
