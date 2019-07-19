import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Components */
import Currencies from './currencies';
import Favorites from './favorites';
import History from './history';
import MarketTrends from './marketTrends';
import Statistics from './statistics';
import Top from './top';
import Wallet from './wallet';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Currencies} />
        <Route path="/main/currencies" component={Currencies} />
        <Route path="/main/favorites" component={Favorites} />
        <Route path="/main/history" component={History} />
        <Route path="/main/marketTrends" component={MarketTrends} />
        <Route path="/main/statistics" component={Statistics} />
        <Route path="/main/top" component={Top} />
        <Route path="/main/wallet" component={Wallet} />
      </Switch>
    </Router>
  );
};

Main.propTypes = {
  props: PropTypes.object.isRequired
};

export default Main;
