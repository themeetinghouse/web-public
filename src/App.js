import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Entry from './pages/entry/Entry';
import HomeExplore from './pages/homeExplore';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Home } from './pages/home';
import { AppContext } from './services/Context';
import { AppContextProvider } from './components/AppContextProvider';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

class App extends Component {

  constructor(props){
    super(props);
 }


  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AppContextProvider> 
            <Router>
              <Route exact path="/" component={Entry}></Route>
              <Route path="/home" component={Home}></Route>
              {/* <Route exact path="/" render={(props) => <Entry {...props}  />}></Route>
              <Route path="/home" render={(props) => <Home {...props}  />}></Route> */}
              {/* <Route path="/home" render={(props) => <Home {...props} onPathChange={this.pathChanged} />}></Route> */}
            </Router>
          </AppContextProvider>
        </MuiThemeProvider>
      </React.Fragment>

    );
  }

}

export default App;
