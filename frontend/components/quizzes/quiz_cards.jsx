import React from 'react';
import { Link } from 'react-router';
import QuizCardItem from './quiz_card_item';
import {GridList, GridTile} from 'material-ui/GridList';

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

class QuizCards extends React.Component {
  constructor(props) {
    super(props);
  }

  createQuizButton() {
    return (
      <GridTile
        title="Create a Quiz!"></GridTile>
    );
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          padding={20}
          cellHeight={250}
          style={styles.gridList}>
          {this.createQuizButton()}
          {this.props.quizzes.map((quiz) => (
            <QuizCardItem key={quiz.id} quiz={quiz} />
          ))}
        </GridList>
      </div>
    );
  }
}

export default QuizCards;
