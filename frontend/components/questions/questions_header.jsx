import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


const QuestionsHeader = () => (
  <AppBar
    title="My Quizzes"
    iconElementLeft={
      <Link to="/quizzes"><IconButton><ArrowBack /></IconButton></Link>
    }
  />
);

const styles = {
};

export default QuestionsHeader;
