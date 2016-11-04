import React from 'react';
import QuestionCardItem from './question_card_item';

class QuizEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.questions.map((question, idx) => (
          <QuestionCardItem key={idx} question={question} />
        ))}
      </div>
    );
  }
}

export default QuizEdit;
