import React from 'react';
import { Link, withRouter } from 'react-router';
import QuestionContents from '../questions/question_contents';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestQuiz(this.props.quizId);
    this.props.requestQuestions(this.props.quizId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.responses.map(response => this.props.createResponse(response));
    this.props.router.push('/index');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <CardTitle title={this.props.quiz.title} />
          {this.props.questions.map((question, idx) => (
            <Card key={idx}>
              <CardHeader title={question.order + ". " + question.text} />
              <QuestionContents question={question} containerThis={this}/>
            </Card>
          ))}
          <RaisedButton type="submit" label="Submit" primary={true} />
        </Card>
      </form>
    );
  }

}

export default Quiz;
