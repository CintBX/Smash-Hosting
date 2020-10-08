import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ValidRoute = props => {
  if(props.type !== "valid") return <Redirect to="/" />;
  else return <Route {...props} />
};

export default ValidRoute;