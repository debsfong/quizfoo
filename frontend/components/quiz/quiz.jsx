import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createFormElement = this.createFormElement.bind(this);
  }

  componentWillMount() {
    this.props.requestQuiz(this.props.params.quizId);
    this.props.requestQuestions(this.props.params.quizId);
  }

  handleSubmit() {

  }

  createFormElement(question, idx) {
    switch (question.form_type) {
      case "multipleChoice":
        return (
          <div>
            <h2>{question.text}</h2>
            <ol type="a">
              {question.choices.map((choice, i) => (
                <li key={i}>{choice.value}</li>
              ))}
            </ol>
          </div>
        );
      case "shortAnswer":
        return (
          <div>
            <h2>{question.text}</h2>
            <TextField hintText="Short Answer"/>
          </div>
        );
      case "paragraph":
        return (
          <div>
            <h2>{question.text}</h2>
            <TextField hintText="Complete Sentences" multiLine={true} rows={4}/>
          </div>
        );
      default:

    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.questions.map((question, idx) => (
          this.createFormElement(question, idx)
        ))}
      </form>
    );
  }

}

export default Quiz;
