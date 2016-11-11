import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import QuestionCards from '../questions/question_cards';
import Results from '../results/results';
import Quiz from '../quiz/quiz';

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
          <br />
          <QuestionCards
            questions={this.props.questions}
            quiz={this.props.quiz}
            requestQuiz={this.props.requestQuiz}
            createQuestion={this.props.createQuestion}
            deleteQuestion={this.props.deleteQuestion}
            requestQuestions={this.props.requestQuestions}
          />
        </Tab>
        <Tab label="Analyze">
          <br />
          <Results
            questions={this.props.questions}
            quiz={this.props.quiz}
            requestQuiz={this.props.requestQuiz}
            requestQuestions={this.props.requestQuestions}
          />
        </Tab>
        <Tab label="Preview">
          <br />
          <Quiz
            questions={this.props.questions}
            quiz={this.props.quiz}
            requestQuiz={this.props.requestQuiz}
            requestQuestions={this.props.requestQuestions}
            quizId={this.props.params.quizId}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default QuizNav;
