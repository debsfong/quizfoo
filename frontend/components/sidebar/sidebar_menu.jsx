import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavMenu from 'material-ui/svg-icons/navigation/menu';
import NavApps from 'material-ui/svg-icons/navigation/apps';
import ActionHome from 'material-ui/svg-icons/action/home';

class SidebarMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><NavMenu /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem
            linkButton={true}
            containerElement={<Link to="/" />}
            primaryText="Home"
            leftIcon={<ActionHome />}
          />
          <MenuItem
            linkButton={true}
            containerElement={<Link to="/quizzes" />}
            leftIcon={<NavApps />}
            primaryText="My Quizzes"
          />
        </IconMenu>
      </div>
    );
  }
}

export default SidebarMenu;
