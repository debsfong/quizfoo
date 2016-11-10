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
      form_type: "shortAnswer",
      quiz_id: this.props.quizId,
      choices: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
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

  formOptions() {
    if (this.state.form_type === "multipleChoice") {
      return (
        <TextField hintText="Option" />
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
        {this.formOptions}
        <FlatButton label="Cancel" onClick={this.props.handleClose}/>
        <RaisedButton primary={true} type="submit" label="Submit" />
      </form>
    );
  }

}

export default QuestionModal;
