import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';

const sessionLinks = () => (
  <AppBar
    title="QuizFoo"
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

const personalHeader = (currentUser, logout) => (
  <AppBar
    title="Quizfoo"
    iconElementLeft={<Link to="/"><IconButton><ActionHome /></IconButton></Link>}
    iconElementRight={
      <Link to="/"><RaisedButton onClick={logout} label="Log Out" /></Link>
    }
  />
);

const Header = ({ currentUser, logout }) => (
  currentUser ? personalHeader(currentUser, logout) : sessionLinks()
);

export default Header;
