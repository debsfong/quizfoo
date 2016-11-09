import React from 'react';
import HeaderContainer from './header/header_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <HeaderContainer />
      <br/>
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
