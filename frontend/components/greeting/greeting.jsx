import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';

const titleClick = () => console.log('title');

const sessionLinks = () => (
  <AppBar
    onTitleTouchTap={titleClick}
    title={
      <span style={styles.title}>Quizfoo</span>}
    iconElementLeft={<Link to="/"><IconButton><ActionHome /></IconButton></Link>}
    iconElementRight={
      <div>
        <Link to="/login"><RaisedButton label="Log In" /></Link>
        &nbsp;&nbsp;
        <Link to="/signup"><RaisedButton label="Sign Up" /></Link>
      </div>
    }
  />
);

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const personalGreeting = (currentUser, logout) => (
  <AppBar title="Quizfoo"

      iconElementRight={<RaisedButton onClick={logout} label="Log Out" />}
  />
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
