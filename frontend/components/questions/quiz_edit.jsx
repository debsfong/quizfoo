import React from 'react';
import QuestionCardItem from './question_card_item';
import { Link } from 'react-router';

class QuizEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuiz(this.props.params.quizId);
    this.props.requestQuestions(this.props.params.quizId);
  }

  render () {
    return (
      <div>
        {this.props.quiz.title}
        {this.props.questions.map((question, idx) => (
          <QuestionCardItem key={idx} question={question} />
        ))}
        <Link to="/quizzes">Back to My Quizzes</Link>
      </div>
    );
  }
}

export default QuizEdit;
