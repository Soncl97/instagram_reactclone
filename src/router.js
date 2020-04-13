import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Login from './Pages/Login.js';
import MainPage from './Pages/MainPage.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/main" component={MainPage} />
          </Switch>
      </Router>
    );
  }
}

export default Routes;