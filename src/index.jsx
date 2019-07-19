import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Components */
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Main from './screens';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  props: PropTypes.object.isRequired
};

export default App;
