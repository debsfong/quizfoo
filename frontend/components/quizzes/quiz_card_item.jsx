import React from 'react';
import { withRouter } from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';

const QuizCardItem = ({quiz, router}) => {
  const handleClick = url => e => router.push(url);

  return (
    <GridTile
      title={quiz.title}
      onClick={handleClick(`/quiz/${quiz.id}`)}>
    </GridTile>
  );
};

export default withRouter(QuizCardItem);
