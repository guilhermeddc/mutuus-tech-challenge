import React, {useCallback, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';

import {Container, Content, YouWin, YouLose, Button} from './styles';
import HeroeCard from '../../components/HeroesCard';

import Navigator from '../../components/Navigator';
import {useAuth} from '../../hooks/auth';
import {useHistoric} from '../../hooks/historic';

const Home = () => {
  const {user} = useAuth();
  const {setHistoric} = useHistoric();
  const history = useHistory();

  const [playerHeroes, setPlayerHeroes] = useState([]);
  const [pcHeroes, setPcHeroes] = useState([]);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [pcPoints, setPcPoints] = useState(0);
  const [pcEndGeme, setPcEndGame] = useState(false);
  const [playerEndGeme, setPlayerEndGame] = useState(false);

  const heroSerialized = useCallback((response) => {
    const hero = response.map((res) => {
      return {
        id: res.id,
        name: res.name,
        image: `${res.thumbnail.path}.${res.thumbnail.extension}`,
        points:
          res.comics.available +
          res.events.available +
          res.series.available +
          res.stories.available,
      };
    });

    return hero;
  }, []);

  const getPlayerHero = useCallback(async () => {
    const randomHero = Math.floor(Math.random() * (1492 - 1)) + 1;

    const {data: response} = await api.get(
      `/characters${process.env.REACT_APP_AFTER_URL}&limit=1&offset=${randomHero}`,
    );

    const hero = heroSerialized(response.data.results);

    if (
      hero[0].points === 0 ||
      hero[0].image ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ||
      hero[0].image ===
        'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'
    ) {
      getPlayerHero();
      return;
    }

    setPlayerHeroes([...playerHeroes, hero[0]]);
    setPlayerPoints(playerPoints + hero[0].points);
  }, [heroSerialized, playerHeroes, playerPoints]);

  const getPCHero = useCallback(async () => {
    const randomHero = Math.floor(Math.random() * (1492 - 1)) + 1;

    const {data: response} = await api.get(
      `/characters${process.env.REACT_APP_AFTER_URL}&limit=1&offset=${randomHero}`,
    );

    const hero = heroSerialized(response.data.results);

    if (
      hero[0].points === 0 ||
      hero[0].image ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ||
      hero[0].image ===
        'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'
    ) {
      getPCHero();
      return;
    }

    setPcHeroes([...pcHeroes, hero[0]]);
    setPcPoints(pcPoints + hero[0].points);
  }, [heroSerialized, pcHeroes, pcPoints]);

  const handleEndGame = useCallback(() => {
    return pcEndGeme && playerEndGeme;
  }, [pcEndGeme, playerEndGeme]);

  const handleSaveResultGame = useCallback(() => {
    if (handleEndGame()) {
      if (pcPoints > playerPoints) {
        setHistoric({pcPoints, playerPoints, result: false});
      } else {
        setHistoric({pcPoints, playerPoints, result: true});
      }
    }
  }, [handleEndGame, pcPoints, playerPoints, setHistoric]);

  const handleResetGame = useCallback(() => {
    setPlayerHeroes([]);
    setPcHeroes([]);
    setPlayerPoints(0);
    setPcPoints(0);
    setPcEndGame(false);
    setPlayerEndGame(false);
    handleSaveResultGame();
  }, [handleSaveResultGame]);

  const handleHistoryPushToHistoric = useCallback(() => {
    history.push('/historic');
    handleSaveResultGame();
  }, [handleSaveResultGame, history]);

  useEffect(() => {
    if (pcHeroes.length === 3) {
      setPcEndGame(true);
    }
    if (playerHeroes.length === 3) {
      setPlayerEndGame(true);
    }
  }, [pcHeroes.length, playerHeroes.length]);

  return (
    <Container>
      <Navigator
        onClickNewGame={() => handleResetGame()}
        onClickHistoric={() => handleHistoryPushToHistoric()}
      />
      <Content>
        <section>
          <div>
            <h1>
              {user ? user.split(' ')[0] : 'Player'} <span>{playerPoints}</span>
            </h1>

            {playerHeroes.length > 0 &&
              playerHeroes.map((hero) => (
                <HeroeCard
                  key={hero.id}
                  name={hero.name}
                  image={hero.image}
                  points={hero.points}
                />
              ))}
            {playerHeroes.length < 3 && (
              <Button onClick={() => getPlayerHero()}>+</Button>
            )}
          </div>
          <div>
            <h1>
              Computer <span>{pcPoints}</span>
            </h1>

            {pcHeroes.length > 0 &&
              pcHeroes.map((hero) => (
                <HeroeCard
                  key={hero.id}
                  name={hero.name}
                  image={hero.image}
                  points={hero.points}
                />
              ))}
            {pcHeroes.length < 3 && (
              <Button onClick={() => getPCHero()}>+</Button>
            )}
          </div>
        </section>
      </Content>
      {handleEndGame() && pcPoints > playerPoints && (
        <YouLose>
          <h3>You Lost!!!</h3>
          <button onClick={() => handleResetGame()}>New Game</button>
        </YouLose>
      )}
      {handleEndGame() && pcPoints < playerPoints && (
        <YouWin>
          <h3>You Win!!!</h3>
          <button onClick={() => handleResetGame()}>New Game</button>
        </YouWin>
      )}
    </Container>
  );
};

export default Home;
