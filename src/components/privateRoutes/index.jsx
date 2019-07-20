import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const auth = true;

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

PrivateRoute.defaultProps = {
  Component: null,
  rest: {}
};

PrivateRoute.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  rest: PropTypes.object
};

export default PrivateRoute;
