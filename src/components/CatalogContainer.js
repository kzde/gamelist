import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { colorPalettes, margins, cardSize, media } from '../utils/styleUtils';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, ${cardSize.width});
  grid-gap: ${margins.large};
  background: ${colorPalettes.lightGrey};
  padding: ${margins.medium};
  padding-top: 0;
  ${media.desktop`grid-template-columns: repeat(3, ${cardSize.width});`}
  ${media.tablet`grid-template-columns: repeat(2, ${cardSize.width});`}
  ${media.phone`grid-template-columns: repeat(1, ${cardSize.width});`}
`;

const CatalogContainer = ({games}) => {
  return (
    <Wrapper>
      {
        games.map((game, index) => {
          return <Card
            key={`${game.name}${index}`}
            title={game.name}
            subTitle={game.platform}
            cover={game.cover}
          />
        })
      }
    </Wrapper>

  )
}

export default CatalogContainer;