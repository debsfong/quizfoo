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
      type: "multipleChoice",
      quiz_id: this.props.quizId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = this.state;
    this.props.createQuestion({question});
  }

  update(field) {
    return (e) => this.setState ({
			[field]: e.target.value
		});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField hintText="Question"
          onChange={this.update("text")} />
        <br/>
        <SelectField
          floatingLabelText="Question Type:"
          onChange={this.update("type")}>
          <MenuItem value="multipleChoice" primaryText="Multiple Choice" />
          <MenuItem value="shortAnswer" primaryText="Short Answer" />
          <MenuItem value="paragraph" primaryText="Paragraph" />
        </SelectField>
        <br/>
        <FlatButton label="Cancel" onClick={this.props.handleClose}/>
        <RaisedButton primary={true} type="submit" label="Submit" />
      </form>
    );
  }

}

export default QuestionModal;
