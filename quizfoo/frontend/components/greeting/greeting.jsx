import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const titleClick = () => console.log('title');

const sessionLinks = () => (
  <AppBar
    onTitleTouchTap={titleClick}
    title={<Link to="/"><span style={styles.title}>HELP</span></Link>}
    iconElementLeft={<IconButton><ActionHome /></IconButton>}
    iconElementRight={
      <div>
        <Link to="/login"><RaisedButton label="Log In" /></Link>
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
  <AppBar
    title={<Link to="/"><span style={styles.title}>Quizfoo</span></Link>}
    iconElementLeft={<IconButton to="/"><ActionHome/></IconButton>}
    iconElementRight={<RaisedButton onClick={logout} label="Log Out" />}
  />
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
