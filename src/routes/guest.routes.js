import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../pages/SignIn';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
  </Switch>
);

export default Routes;
