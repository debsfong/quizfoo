import React from 'react';

class QuestionContents extends React.Component {
  constructor(props) {
    super(props);
    this.contents = this.contents.bind(this);
  }

  contents() {
    if (this.props.question.form_type === "multipleChoice") {
      var choices = [];
      for (var i = 0; i < this.props.question.choices.length; i++) {
        choices.push(<li key={i}>{this.props.question.choices[i].value}</li>);
      }
      return <ol type="a">{choices}</ol>;
    } else {
      console.log(this.props.question.form_type);
    }
  }

  render() {
    return (
      <div>
        {this.contents()}
      </div>
    );
  }
}

export default QuestionContents;
