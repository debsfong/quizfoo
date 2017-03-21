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
      choices_attributes: [
        {value: ""},
        {value: ""},
        {value: ""},
        {value: ""}
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
    this.addChoiceA = this.addChoiceA.bind(this);
    this.addChoiceB = this.addChoiceB.bind(this);
    this.addChoiceC = this.addChoiceC.bind(this);
    this.addChoiceD = this.addChoiceD.bind(this);
  }

  handleSubmit(e) {
    debugger;
    this.props.handleClose();
    e.preventDefault();
    const question = this.state;
    const choices_attributes = this.state.choices_attributes;
    this.props.createQuestion(question, choices_attributes);
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

  addChoiceA(e) {
    let choices = this.state.choices_attributes.slice();
    choices.splice(0, 1, {value: e.target.value});
    this.setState ({
      choices_attributes: choices
    });
  }

  addChoiceB(e) {
    let choices = this.state.choices_attributes.slice();
    choices.splice(1, 1, {value: e.target.value});
    this.setState ({
      choices_attributes: choices
    });
  }

  addChoiceC(e) {
    let choices = this.state.choices_attributes.slice();
    choices.splice(2, 1, {value: e.target.value});
    this.setState ({
      choices_attributes: choices
    });
  }

  addChoiceD(e) {
    let choices = this.state.choices_attributes.slice();
    choices.splice(3, 1, {value: e.target.value});
    this.setState ({
      choices_attributes: choices
    });
  }

  formOptions() {
    if (this.state.form_type === "multipleChoice") {
      return (
        <div>
          <TextField
            hintText="Option A"
            value={this.state.choices_attributes[0].value}
            onChange={this.addChoiceA} />
          <TextField
            hintText="Option B"
            value={this.state.choices_attributes[1].value}
            onChange={this.addChoiceB} />
          <TextField
            hintText="Option C"
            value={this.state.choices_attributes[2].value}
            onChange={this.addChoiceC} />
          <TextField
            hintText="Option D"
            value={this.state.choices_attributes[3].value}
            onChange={this.addChoiceD} />
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
