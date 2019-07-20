import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const auth = false;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/main',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  rest: PropTypes.object.isRequired
};

export default PrivateRoute;
