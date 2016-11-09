import React from 'react';
import { Link } from 'react-redux';
import ResultsSidebar from './results_sidebar';
import ResultsTable from './results_table';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {responses: [], text: "Question", order: "#"}
    };
  }

  // componentWillMount() {
  //   this.props.requestQuestions(this.props.params.quizId);
  // }

  render() {
    return (
      <div className="results-box">
        <ResultsSidebar questions={this.props.questions} containerThis={this}/>
        <ResultsTable question={this.state.question}/>
      </div>
    );
  }
}

export default Results;
