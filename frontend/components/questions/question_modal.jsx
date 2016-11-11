import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      form_type: "multipleChoice",
      quiz_id: this.props.quizId,
      choices: [
        {value: ""},
        {value: ""},
        {value: ""},
        {value: ""}
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
    this.addChoice = this.addChoice.bind(this);
  }

  handleSubmit(e) {
    this.props.handleClose();
    e.preventDefault();
    const question = this.state;
    this.props.createQuestion(question);
    this.props.requestQuestions(this.props.quizId);
  }

  update(field) {
    return (e) => this.setState ({
			[field]: e.target.value
		});
  }

  updateDropdown(event, index, value) {
    this.setState({form_type: value});
  }

  addChoice() {

  }

  formOptions() {
    if (this.state.form_type === "multipleChoice") {
      return (
        <div>
          <TextField
            hintText="Option A"
            value={this.state.choices[0].value}
            onChange={this.addChoice("choices[0].value")} />
          <TextField
            hintText="Option B"
            value={this.state.choices[1].value}
            onChange={this.addChoice("choices[1].value")} />
          <TextField
            hintText="Option C"
            value={this.state.choices[2].value}
            onChange={this.addChoice("choices[2].value")} />
          <TextField
            hintText="Option D"
            value={this.state.choices[3].value}
            onChange={this.addChoice("choices[3].value")} />
        </div>
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField hintText="Question"
          onChange={this.update("text")} />
        <br/>
        <SelectField
          disabled={false}
          value={this.state.form_type}
          floatingLabelText="Question Type"
          onChange={this.updateDropdown}>
          <MenuItem value="multipleChoice" primaryText="Multiple Choice" />
          <MenuItem value="shortAnswer" primaryText="Short Answer" />
          <MenuItem value="paragraph" primaryText="Paragraph" />
        </SelectField>
        <br/>
        {this.formOptions()}
        <br/>
        <FlatButton label="Cancel" onClick={this.props.handleClose}/>
        <RaisedButton primary={true} type="submit" label="Submit" />
      </form>
    );
  }

}

export default QuestionModal;
