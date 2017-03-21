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

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render () {
    return (
      <Card>
        <CardTitle title={this.props.quiz.title} />
        {this.props.questions.map((question, idx) => (
          <QuestionCardItem
            key={idx}
            quizId={this.props.quiz.id}
            question={question}
            deleteQuestion={this.props.deleteQuestion}
            handleOpen={this.props.handleOpen}
            requestQuestions={this.props.requestQuestions}/>
        ))}
        <Card className="create-card" onTouchTap={this.handleOpen}>
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
            createQuestion={this.props.createQuestion}
            createChoice={this.props.createChoice}
            requestQuestions={this.props.requestQuestions}/>
        </Dialog>
      </Card>
    );
  }
}

export default QuestionCards;
