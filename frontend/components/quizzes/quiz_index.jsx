import React from 'react';
import { Link } from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';

class QuizIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    debugger;
    this.props.requestQuizzes();
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
        overflowY: 'auto',
      },
    };

    const actions = [
      <FlatButton
        label="View"
        primary={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          padding={20}
          style={styles.gridList}>
          {this.props.quizzes.map((quiz, idx) => (
            <Card>
              <CardTitle
                title={quiz.title}
                subtitle={"By " + quiz.user.first_name + " " + quiz.user.last_name}
              />
              <CardActions>
                <RaisedButton label="View" primary={true} />
              </CardActions>
            </Card>
          ))}
        </GridList>
      </div>

    );
  }
}

export default QuizIndex;