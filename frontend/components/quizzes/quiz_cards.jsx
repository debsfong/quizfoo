import React from 'react';
import { Link } from 'react-router';
import QuizCardItem from './quiz_card_item';

class QuizCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quiz: {
        title: "",
      }
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestQuizzes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.quiz !== this.props.quiz) {
      this.props.router.push(`/quiz/${this.props.quiz.id}`);
    }
  }

  handleSubmit() {
    this.setState({open: false});
    const quiz = this.state.quiz;
    this.props.createQuiz(quiz);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
    this.state.quiz.title = "";
  }

  update() {
    return (e) => this.setState ({
      quiz: {title: e.target.value}
    });
  }

  render() {
    // const disabled = (this.state.quiz.title == "");
    //
    // const actions = [
    //   <FlatButton
    //     label="Cancel"
    //     onClick={this.handleClose}
    //   />,
    //   <RaisedButton
    //     label="Submit"
    //     disabled={disabled}
    //     primary={true}
    //     onClick={this.handleSubmit}
    //   />
    // ];

// style={styles.root}
    return (
      <div className="grid">
        {this.props.quizzes.map((quiz, idx) =>
          <QuizCardItem key={idx} deleteQuiz={this.props.deleteQuiz} quiz={quiz}/>)
        }
      </div>

    );
    // <GridList
    //   cols={4}
    //   padding={20}
    //   style={styles.gridList}>
    //   <Card onTouchTap={this.handleOpen}>
    //     <CardTitle title="+ Create a Quiz" />
    //   </Card>
    //   {this.props.quizzes.map((quiz, idx) => (
    //     <QuizCardItem key={idx} deleteQuiz={this.props.deleteQuiz} quiz={quiz}/>
    //   ))}
    // </GridList>
    // <Dialog
    //   title="What would you like to title your Quiz?"
    //   actions={actions}
    //   modal={false}
    //   open={this.state.open}
    //   onRequestClose={this.handleClose}>
    //   <TextField
    //     hintText="Title"
    //     onChange={this.update("title")}/>
    // </Dialog>
  }
}

export default QuizCards;
