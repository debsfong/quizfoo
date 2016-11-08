import React from 'react';
import QuestionCardItem from './question_card_item';
import QuestionModal from './question_modal.jsx';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


class QuestionCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.requestQuiz(this.props.params.quizId);
    this.props.requestQuestions(this.props.params.quizId);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render () {

    return (
      <div>
        <h1>{this.props.quiz.title}</h1>
        {this.props.questions.map((question, idx) => (
          <QuestionCardItem
            key={idx}
            question={question}
            deleteQuestion={this.props.deleteQuestion}
            handleOpen={this.props.handleOpen}/>
        ))}
        <Card onTouchTap={this.handleOpen}>
          <CardTitle title="+ Add a Question" />
        </Card>
        <Dialog
          title="Create/Edit a Question"
          model={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <QuestionModal
            quizId={this.props.quiz.id}
            handleClose={this.handleClose}
            createQuestion={this.props.createQuestion}/>
        </Dialog>
      </div>
    );
  }
}

export default QuestionCards;
