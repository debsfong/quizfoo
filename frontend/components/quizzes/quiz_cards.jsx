import React from 'react';
import { Link } from 'react-router';
import QuizCardItem from './quiz_card_item';
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class QuizCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quiz: {
        title: "",
        teacher_id: props.teacher_id
      }
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.requestQuizzes();
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
    const quiz = this.state.quiz;
    this.props.createQuiz(quiz);
    // this.props.router.push(`/quiz/${newQuiz.id}`);
  }

  update() {
    return (e) => this.setState ({
      quiz: {title: e.target.value,
            teacher_id: this.props.teacher_id}
    });
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 1000,
        height: 450,
        overflowY: 'auto',
      },
    };

    const actions = [
      <RaisedButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          padding={20}
          style={styles.gridList}>
          <GridTile title="Create a Quiz" onTouchTap={this.handleOpen}/>
          {this.props.quizzes.map((quiz, idx) => (
            <QuizCardItem key={idx} quiz={quiz} />
          ))}
        </GridList>
        <Dialog
          title="What would you like to title your Quiz?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <TextField
            hintText="Title"
            value={this.state.title}
            onChange={this.update("title")}/>
        </Dialog>
      </div>
    );
  }
}

export default QuizCards;
