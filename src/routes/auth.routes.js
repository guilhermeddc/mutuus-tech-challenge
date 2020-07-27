import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Historic from '../pages/Historic';

const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/historic" component={Historic} />
    </Switch>
  </>
);

export default Routes;
