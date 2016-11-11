import React from 'react';
import { Link, withRouter } from 'react-router';
import QuestionContents from '../questions/question_contents';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

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

  update(questionId) {
    let responses = this.state.responses.slice();
    responses.push({
      question_id: questionId,
      // value: e.target.value
    });
    // this.setState({ responses: responses });
  }

  contents(question) {
    switch (question.form_type) {
      case "multipleChoice":
        return (
          <RadioButtonGroup name={question.text}>
            {question.choices.map((choice, idx) => (
              <RadioButton key={idx} value={choice.value} label={choice.value} />
            ))}
          </RadioButtonGroup>
        );
      case "shortAnswer":
        return (
          <TextField
            hintText="Short Answer"
            onChange={this.update(question.id)}/>
        );
      case "paragraph":
        return (
          <TextField
            hintText="Complete Sentences"
            multiLine={true}
            rows={4}
            onChange={this.update(question.id)}/>
        );
      default:
        return (
          <div>{question.form_type}</div>
        );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <CardTitle title={this.props.quiz.title} />
          {this.props.questions.map((question, idx) => (
            <Card key={idx}>
              <CardHeader title={question.order + ". " + question.text} />
              <CardText>
                {this.contents(question)}
              </CardText>
            </Card>
          ))}
          <RaisedButton type="submit" label="Submit" primary={true} />
        </Card>
      </form>
    );
  }

}

export default Quiz;
