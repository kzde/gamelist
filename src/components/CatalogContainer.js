import React from 'react';
import styled from 'styled-components';
import gamesList from '../games.json';
import Card from './Card';
import { colorPalettes, basicMargin } from '../utils/styleUtils';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 328px);
  grid-gap: 32px;
  background: ${colorPalettes.lightGrey};
  padding: ${basicMargin};
  padding-top: 0;
`;

const CatalogContainer = () => {
  const { games } = gamesList;


  return (
    <Wrapper>
      {
        games.map((game, index) => {
          return <Card
            key={`${game.name}${index}`}
            title={game.name}
            platForm={game.platform}
            cover={game.cover}
          />
        })
      }
    </Wrapper>

  )
}

export default CatalogContainer;