import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* components */
import PrivateRoute from '../components/privateRoutes';

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
        <PrivateRoute path="/main/favorites" component={Favorites} />
        <PrivateRoute path="/main/history" component={History} />
        <Route path="/main/marketTrends" component={MarketTrends} />
        <Route path="/main/statistics" component={Statistics} />
        <Route path="/main/top" component={Top} />
        <PrivateRoute path="/main/wallet" component={Wallet} />
      </Switch>
    </Router>
  );
};
export default Main;
