import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Card from './Card';
import {
  colorPalettes, margins, cardSize, media
} from '../utils/style';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${cardSize.width}, 4fr));
  grid-gap: ${margins.large};
  justify-items: center;
  background: ${colorPalettes.lightGrey};
  padding: 0 ${margins.medium};
  & div {
    max-width: ${cardSize.width}
  }
  ${media.phone`padding: 0 ${margins.small};
    & div {
      max-width: ${cardSize.phoneWidth}
    }
  `}
`;

const CatalogContainer = ({ games, history }) => {
  const navTo = (params) => {
    history.push(`/${params}`);
  };
  return (
    <Wrapper>
      {games.map((game, index) => (
        <Card
          key={`${game.name}${index}`}
          title={game.name}
          subTitle={game.platform}
          cover={game.cover}
          handleClick={navTo}
        />
      ))}
    </Wrapper>
  );
};

CatalogContainer.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export const catalogContainer = CatalogContainer;
export default withRouter(CatalogContainer);
