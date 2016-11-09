import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import QuestionCards from '../questions/question_cards';

class QuizNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuiz(this.props.params.quizId);
    this.props.requestQuestions(this.props.params.quizId);
  }

  render() {
    return (
      <Tabs>
        <Tab label="Create">
          <QuestionCards
            questions={this.props.questions}
            quiz={this.props.quiz}
            requestQuiz={this.props.requestQuiz}
            createQuestion={this.props.createQuestion}
            deleteQuestion={this.props.deleteQuestion}
          />
        </Tab>
        <Tab label="Analyze">
          Analyze Tab
        </Tab>
      </Tabs>
    );
  }
}

export default QuizNav;
