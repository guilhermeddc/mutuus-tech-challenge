import React from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../../hooks/auth';
import {useHistoric} from '../../hooks/historic';

import {Container} from './styles';

function Navigator({onClickNewGame, onClickHistoric}) {
  const {signOut} = useAuth();
  const {handleClearhistoric} = useHistoric();
  const history = useHistory();

  const logout = () => {
    signOut();
    handleClearhistoric();
    history.push('/');
  };

  return (
    <Container>
      <button onClick={onClickNewGame}>New Game</button>
      <button onClick={onClickHistoric}>Historic</button>
      <button onClick={() => logout()}>Sign Out</button>
    </Container>
  );
}

export default Navigator;
