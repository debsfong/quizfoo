import React from 'react';
import { Link } from 'react-router';
import SidebarMenu from '../sidebar/sidebar_menu';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const sessionLinks = () => (
  <AppBar
    title={<Link className="link" to="/">Quizfoo</Link>}
    iconElementLeft={<SidebarMenu />}
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
    title={<Link className="link" to="/">Quizfoo</Link>}
    iconElementLeft={<SidebarMenu />}
    iconElementRight={
      <Link to="/"><RaisedButton onClick={logout} label="Log Out" /></Link>
    }
  />
);

const Header = ({ currentUser, logout }) => (
  currentUser ? personalHeader(currentUser, logout) : sessionLinks()
);

export default Header;
