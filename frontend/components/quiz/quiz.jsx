import React from 'react';
import QuestionContents from '../questions/question_contents';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestQuiz(this.props.params.quizId);
    this.props.requestQuestions(this.props.params.quizId);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.questions.map((question, idx) => (
          <Card key={idx}>
            <CardHeader title={question.order + ". " + question.text} />
            <QuestionContents question={question} />
          </Card>
        ))}
        <RaisedButton type="submit" label="Submit" primary={true} />
      </form>
    );
  }

}

export default Quiz;
