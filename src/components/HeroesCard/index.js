import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './styles';

function HeroesCard({name, image, points}) {
  return (
    <Container points={points}>
      <img src={image} alt={name} />
      <div>
        <p>{name}</p>
        <span>
          <p>{points}</p>
        </span>
      </div>
    </Container>
  );
}

HeroesCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  points: PropTypes.number,
};

HeroesCard.defaultProps = {
  name: 'Heroe',
  image:
    'https://i.pinimg.com/564x/8c/b2/32/8cb23299c3f51d3706e6a3520ca92cb1.jpg',
  points: 150,
};

export default HeroesCard;
