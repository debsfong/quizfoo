import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <GreetingContainer />
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
