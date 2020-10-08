import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ValidateRoute = props => {
  if(props.type === "invalid") return <Redirect to="/" />;
  else return <Route {...props} />
};

export default ValidateRoute;