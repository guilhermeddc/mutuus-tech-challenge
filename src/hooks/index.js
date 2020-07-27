import React from 'react';

import {AuthProvider} from './auth';
import {HistoricProvider} from './historic';

const AppProvider = ({children}) => {
  return (
    <AuthProvider>
      <HistoricProvider>{children}</HistoricProvider>
    </AuthProvider>
  );
};

export default AppProvider;
