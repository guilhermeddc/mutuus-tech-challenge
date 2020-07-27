import React from 'react';
import {useHistory} from 'react-router-dom';

import {Container, Content} from './styles';

import Navigator from '../../components/Navigator';
import {useHistoric} from '../../hooks/historic';

const Historic = () => {
  const {historic} = useHistoric();
  const history = useHistory();

  return (
    <Container>
      <Navigator onClickNewGame={() => history.push('/')} />
      <Content>
        <h1>Your historic</h1>
        <table>
          <thead>
            <tr id="table-title">
              <th>*</th>
              <th>Your Points</th>
              <th>Computer Points</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {historic.length > 0 &&
              historic.slice(0, 15).map((item, index) => (
                <tr id="table-items" key={index}>
                  <th>{index + 1}</th>
                  <th>{item.playerPoints}</th>
                  <th>{item.pcPoints}</th>
                  <th>{item.result ? 'Win' : 'Lose'}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default Historic;
