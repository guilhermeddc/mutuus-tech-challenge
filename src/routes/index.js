import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {useAuth} from '../hooks/auth';
import Auth from './auth.routes';
import Guest from './guest.routes';

const Routes = () => {
  const {auth} = useAuth();
  const RouterContext = auth ? Auth : Guest;

  return (
    <BrowserRouter>
      <RouterContext />
    </BrowserRouter>
  );
};
export default Routes;
