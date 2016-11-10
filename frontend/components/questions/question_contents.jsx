import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class QuestionContents extends React.Component {
  constructor(props) {
    super(props);
    this.contents = this.contents.bind(this);
  }

  contents() {
    switch (this.props.question.form_type) {
      case "multipleChoice":
        return (
          <RadioButtonGroup name={this.props.question.text}>
            {this.props.question.choices.map((choice, idx) => (
              <RadioButton key={idx} value={choice.value} label={choice.value} />
            ))}
          </RadioButtonGroup>
        );
      case "shortAnswer":
        return (
          <TextField hintText="Short Answer"/>
        );
      case "paragraph":
        return (
          <TextField hintText="Complete Sentences" multiLine={true} rows={4}/>
        );
      default:
        return (
          <div>{this.props.question.form_type}</div>
        );
    }
  }

  render() {
    return (
      <CardText>
        {this.contents()}
      </CardText>
    );
  }
}

export default QuestionContents;
