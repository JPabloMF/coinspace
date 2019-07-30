import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* redux */
import { Provider } from 'react-redux';
import store from './store';

/* screens */
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Main from './screens';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
